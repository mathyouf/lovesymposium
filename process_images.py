import os
from PIL import Image
import shutil


def get_directory_size(directory):
    """Recursively calculates the size of a directory."""
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(directory):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            # skip if it is symbolic link
            if not os.path.islink(fp):
                total_size += os.path.getsize(fp)
    return total_size

def process_images(source_dir, destination_dir, quality=95):
    """ 
    Recursively finds all images in the source directory, converts them to WebP format
    with the specified quality, and saves them to the destination directory, 
    maintaining the original folder structure.
    """
    # Remove the destination directory if it exists to ensure a clean start.
    if os.path.exists(destination_dir):
        shutil.rmtree(destination_dir)
        print(f"Removed existing directory: {destination_dir}")

    # Ensure the destination directory exists.
    os.makedirs(destination_dir, exist_ok=True)
    print(f"Created directory: {destination_dir}")

    # Get the size of the source directory before processing.
    initial_size = get_directory_size(source_dir)

    for root, _, files in os.walk(source_dir):
        # Create a corresponding directory in the destination.
        relative_path = os.path.relpath(root, source_dir)
        dest_path = os.path.join(destination_dir, relative_path)
        os.makedirs(dest_path, exist_ok=True)

        for file in files:
            # Process only image files, excluding .webp.
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                source_file_path = os.path.join(root, file)
                # Define the output file path with the .webp extension.
                base, _ = os.path.splitext(file)
                dest_file_path = os.path.join(dest_path, f"{base}.webp")

                try:
                    # Open the image and save it as WebP.
                    with Image.open(source_file_path) as img:
                        img.save(dest_file_path, 'webp', quality=quality)
                    print(f"Converted {source_file_path} to {dest_file_path}")
                except Exception as e:
                    print(f"Could not convert {source_file_path}: {e}")

    # Get the size of the destination directory after processing.
    final_size = get_directory_size(destination_dir)

    # Calculate and print the space savings.
    if initial_size > 0:
        savings_percentage = ((initial_size - final_size) / initial_size) * 100
        print(f"\nInitial size: {initial_size / (1024*1024):.2f} MB")
        print(f"Final size: {final_size / (1024*1024):.2f} MB")
        print(f"Space saved: {savings_percentage:.2f}%")
    else:
        print("\nSource directory is empty. No images were processed.")

if __name__ == "__main__":
    # Define the source and destination directories.
    source_directory = '2025-staging/assets/images'
    destination_directory = '2025-staging/assets/images-compressed'
    # Run the image processing function.
    process_images(source_directory, destination_directory)
