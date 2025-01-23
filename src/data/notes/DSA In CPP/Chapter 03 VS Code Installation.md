# Chapter 03: VS Code Setup for DSA with C++

## Prerequisites
- Basic understanding of C++ programming
- Familiarity with data structures and algorithms concepts

## Installing Visual Studio Code

1. **Download VS Code**
    - Go to the [official Visual Studio Code website](https://code.visualstudio.com/)
    - Download the installer for your operating system (Windows, MacOS, Linux)

2. **Install VS Code**
    - Run the installer and follow the on-screen instructions to complete the installation

## Setting Up VS Code for C++ Development

1. **Install C++ Compiler**
    - **Windows**: Install MinGW or Visual Studio
    - **MacOS**: Install Xcode Command Line Tools
    - **Linux**: Install GCC

2. **Configure VS Code**
    - Open VS Code
    - Install the C++ extension by Microsoft from the Extensions Marketplace

3. **Configure the C++ Extension**
    - Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
    - Type `C/C++: Edit Configurations (UI)` and select it
    - Set the compiler path and other configurations as needed

## Recommended Extensions for C++ Development

1. **C/C++ by Microsoft**
    - Provides IntelliSense, debugging, and code browsing

2. **CMake Tools**
    - Simplifies the process of building and managing CMake projects

3. **Code Runner**
    - Allows you to run code snippets or files directly within VS Code

4. **GitLens**
    - Enhances Git capabilities within VS Code

5. **Bracket Pair Colorizer**
    - Helps in identifying matching brackets with colors

## Setting Up Your First Project in VS Code

1. **Create a new folder for your project**
2. **Open the folder in VS Code**
3. **Create a new file named `main.cpp`**
4. **Write a simple "Hello, World!" program**

```cpp
#include <iostream>

int main() {
     std::cout << "Hello, World!" << std::endl;
     return 0;
}
```

5. **Build and run the program**
    - Open the terminal in VS Code
    - Compile the program using the command: `g++ main.cpp -o main`
    - Run the program using the command: `./main` (or `main.exe` on Windows)

## Summary
- Install and configure VS Code for C++ development
- Install recommended extensions to enhance productivity
- Verify the setup by running a simple C++ program

## Next Steps
- Start with basic data structures like arrays and linked lists
- Gradually move to more complex algorithms and data structures