# Define input files (you can modify these)
file1 = "src/App.tsx"
file2 = "src/pages/Index.tsx"
file3 = "src/components/Hero.tsx"
file4 = "src/components/Navbar.tsx"
file5 = "src/components/Services.tsx"

# Output file name
output_file = "merged_output.txt"

# Introductory content
intro_content = """#Merged code input to AI.
Project Context: This is a React/TypeScript project using Vite, shadcn-ui, and Tailwind CSS.


### Project Structure
heman@heman-mac cosmic-numbers % tree -I "node_modules"
.
├── README.md
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── lovable-uploads
│   │   └── 123da26c-19a6-43db-9ada-ecbc63170eb7.png
│   ├── og-image.png
│   └── placeholder.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Services.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   └── Index.tsx
│   └── vite-env.d.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

9 directories, 78 files
heman@heman-mac cosmic-numbers %"""

# List of input files
input_files = [file1, file2, file3,file4,file5]

try:
    # Open output file in write mode
    with open(output_file, 'w') as outfile:
        # Write the introductory content first
        outfile.write(intro_content)
        outfile.write("\n\n" + "="*50 + "\n\n")  # Separator after intro

        # Process each input file
        for filename in input_files:
            try:
                # Write file name as header
                outfile.write(f"\n{'='*50}\n")
                outfile.write(f"Contents of {filename}:\n")
                outfile.write(f"{'='*50}\n\n")

                # Open and read input file
                with open(filename, 'r') as infile:
                    # Copy contents to output file
                    outfile.write(infile.read())
                    outfile.write('\n')  # Add newline between files

            except FileNotFoundError:
                outfile.write(f"Error: File '{filename}' not found.\n")
            except Exception as e:
                outfile.write(f"Error processing '{filename}': {str(e)}\n")

    print(f"Files have been merged into {output_file}")

except Exception as e:
    print(f"An error occurred: {str(e)}")

# Created/Modified files during execution:
print("merged_output.txt")