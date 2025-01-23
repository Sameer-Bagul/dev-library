# Chapter 1: Introduction to C++

## What is C++? 🖥️
C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It is known for its performance, efficiency, and flexibility.

## History of C++ 📜
C++ was developed by Bjarne Stroustrup at Bell Labs starting in 1979. The language was designed to provide object-oriented features to the C programming language while maintaining its efficiency. The first commercial release of C++ was in 1985, and it has since evolved through several versions, with the latest standard being C++20.

## Key Features of C++ 🌟
- **Object-Oriented Programming (OOP)**: Supports classes and objects.
- **Standard Template Library (STL)**: Provides a rich set of methods for manipulating data structures.
- **Memory Management**: Offers dynamic memory allocation.
- **Performance**: High performance and close to hardware.
- **Compatibility**: Compatible with C, allowing for the reuse of existing C code.

## Basic Syntax 📜
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

## Variables and Data Types 📊
- **int**: Integer type
- **float**: Floating point type
- **double**: Double precision floating point type
- **char**: Character type
- **bool**: Boolean type

### Example:
```cpp
int age = 25;
float height = 5.9;
double weight = 70.5;
char grade = 'A';
bool isStudent = true;
```

## Control Structures 🔄
### If-Else Statement
```cpp
if (age > 18) {
    cout << "Adult" << endl;
} else {
    cout << "Not an Adult" << endl;
}
```

### For Loop
```cpp
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}
```

### While Loop
```cpp
int i = 0;
while (i < 10) {
    cout << i << " ";
    i++;
}
```

## Functions 🔧
Functions are blocks of code that perform a specific task and can be reused. They help in making the code modular and easier to maintain.

### Example:
```cpp
int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(5, 3);
    cout << "Sum: " << sum << endl;
    return 0;
}
```

## Object-Oriented Programming (OOP) 🧩

> Detailed notes on Object-Oriented Programming (OOP) will be provided in the OOP section.

### Classes and Objects
Classes are blueprints for creating objects. They encapsulate data and functions that operate on the data.

### Example:
```cpp
class Car {
public:
    string brand;
    string model;
    int year;

    void display() {
        cout << brand << " " << model << " " << year << endl;
    }
};

int main() {
    Car car1;
    car1.brand = "Toyota";
    car1.model = "Corolla";
    car1.year = 2020;
    car1.display();
    return 0;
}
```

## Useful Resources 📚
- [C++ Documentation](https://en.cppreference.com/w/)
- [Learn C++](https://www.learncpp.com/)
- [C++ Tutorial](https://www.tutorialspoint.com/cplusplus/index.htm)

---

This chapter provides a brief introduction to C++ programming, covering its history, key features, basic syntax, control structures, and object-oriented programming concepts. Happy coding! 🚀