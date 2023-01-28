# Data Structures for Interviews

## Random Access Memory (RAM)

- RAM has billions of **shelves** and each has its **address**
- Each shelf holds **8 bits** (8 digits of 0s or 1s)
- Processor is connected to a **memory controller**, which has a *direct* connection to each shelf of RAM
- The processor has a **cache** where it stores a copy of recently read shelves
- Memory controller sends a handfull of *nearby* memory addresses when processor asks of an address
  - Reading from sequential memory addresses if faster than jumping around

## Binary Numbers

* **Base 10** number system (**decimal**) : what we are used to (1 - 9, and 0)
* **Base 2 (binary)** : what computers use (0 and 1)
* **Base 16 (hexadecimal or hex)** : often used in CSS (0 - 9, a, b, c, d, e, f)
* **Integer ** : whole number, not a fraction or decimal
* **unsigned integers** : non-negative integers
* **Fractions** : store two numbers - the **numerator** and the **denominator**
* **Decimals** : store two numbers
  1) the number with the dicimal point taken out
  2) the position where the decimal point goes

* **Nagative Numbers** : Reserve the leftmost bit for expressing the sign of the number (0 for positive and 1 for negative)

## Fixed-Width Intergers

* **1 byte (8 bits)** can express **2^8 = 256** different numbers, which is limiting
* We usually use **4 or 8 bytes (32 or 64 bits)** for storing integers
* Most integers are **fixed-width** or **fixed-length** -  the number of bits they take up doesn't change
* **fixed-width** integers
  * Pros =>  space & time efficient -  takes up \*constant space\* or **O(1) space**
  * Cons => values are limited to 2^n possibilities (n = number of bits)

## Arrays

* Stores elements in order with **index or indeces**
* RAM is *basically* an array
* Array
  * Pros => Fast look up time of O(1) constant time
  * Cons => For the fast loop up to work...
    1) Each item in the array needs to be the same size (same bytes)
    2) Needs a big block of uninterrupted free memory - the array must be uninterrupted (contiguous) in memory

## Strings

* To store words (strings), we use **character encoding** to convert character to binary
* **ASCII** is a common character encoding - (ex. A: 01000001)

## Pointers

* **Pointer** : an integer to store *address in memory* to find elements
* The pointers are marked with a ***** at the beginning
* Pointers
  * Pros => solves the cons of array. Needs less uninterrupted memory and can store elements with different bit size
  * Cons => slower than Array because it's NOT cache-friendly
    * This slowdown isn't reflected in the big O time cost. Lookups in this pointer-based array are *still* *O*(1) time

## Dynamic Arrays

* **Dynamic Array** : an array that can resize itself when it runs out of space. Built on top of a normal array
* **JavaScript, Python, Ruby** uses dynamic array as their default array-like data structures
* How it works:
  1. When the initial static array runs out of space, it makes a bigger array
  2. Copy each element from the old array into the new array
  3. Free up the old array
  4. Append the new item into the new array
* Each append has an average cost or **amortized cost** of O(1)
* Dynamic Arrays
  * Pros => we don't have to specify the size ahead of time
  * Cons => some appends can be expensive -  O(n)

## Linked Lists

* **Linked Lists** : Made up of two-item arrays, **node**, which containts a character & a pointer to the next character
* First node => **head**, last node => **tail**
* Linked Lists
  * Pros => 
    * worst-case O(1) time to append, which is better than the worst-case O(n) time of dynamic arrays
    * Faster prepends (adding item to the beginning) O(1) time than dynamic arrays O(n) time
  * Cons => 
    * Slow look up time than arrays - O(i) time
    * It's not cache-friendly as the next node could be anywhere in memory

## Hash Tables

- Also known as **hash map**
- **keys (indices)** are created by a **hashing function**, and the values are stored in the key
- It's quick to look up values by keys, but not otherway around, as it will need to look up each item to look up by a value. Same for arrays
- **Hash collision** : when two keys hash to the same index
- How to deal with hash collision
  - Have each array slot hold a pointer to a linked list holding the counts and word in a node 
  - Look up of a node in a linked list will take O(n), but **collisions are rare enough** that on average lookups in a hash table are O(1) time

