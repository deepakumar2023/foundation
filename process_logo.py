from PIL import Image, ImageChops

def crop_white_bg(img_path, out_logo_path, out_favicon_path):
    img = Image.open(img_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Background is white (255,255,255)
    bg = Image.new('RGB', img.size, (255, 255, 255))
    diff = ImageChops.difference(img, bg)
    diff_gray = diff.convert("L")
    
    # AGGRESSIVE threshold: > 25 means difference is significant
    mask = diff_gray.point(lambda p: p > 25 and 255)
    bbox = mask.getbbox()
    
    if bbox:
        cropped = img.crop(bbox)
        
        # Save cropped logo
        cropped.save(out_logo_path, quality=95)
        print(f"Saved cropped logo to {out_logo_path} with size {cropped.size}")
        
        # Create a square version for the favicon with some padding
        size = max(cropped.size)
        padded_size = int(size * 1.1)
        favicon_img = Image.new('RGB', (padded_size, padded_size), (255, 255, 255))
        paste_pos = ((padded_size - cropped.size[0]) // 2, (padded_size - cropped.size[1]) // 2)
        favicon_img.paste(cropped, paste_pos)
        
        favicon_img.thumbnail((64, 64), Image.LANCZOS)
        favicon_img.save(out_favicon_path, format="PNG")
        print(f"Saved favicon to {out_favicon_path}")
    else:
        print("No bounding box found. Image might be completely white.")

try:
    crop_white_bg('public/logo.jpeg', 'public/logo.jpeg', 'public/favicon.png')
except Exception as e:
    print(f"Error: {e}")
