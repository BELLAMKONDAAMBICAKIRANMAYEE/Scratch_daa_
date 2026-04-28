const codingQuestions = [
 {
  topicId: 1,
  topic: "Arrays",
  questions: [
    {
      title: "Print All Elements of Array",
      difficulty: "Easy",
      problem: "Print all elements present in the array separated by commas.",
      examples: `Input: nums = [1,2,3,4,5,6,7,8]
Output: 1,2,3,4,5,6,7,8`,
      starterCode: `def printElements(nums):
    pass`,
      solution: `def printElements(nums):
    return ",".join(map(str, nums))`,
      hints: ["Loop through the array", "Use join() after converting numbers to strings"]
    },

    {
      title: "Find Length Without len()",
      difficulty: "Easy",
      problem: "Find the number of elements in the array without using len().",
      examples: `Input: nums = [10,20,30,40,50]
Output: 5`,
      starterCode: `def findLength(nums):
    pass`,
      solution: `def findLength(nums):
    count = 0
    for i in nums:
        count += 1
    return count`,
      hints: ["Use a counter variable", "Traverse each element"]
    },

    {
      title: "Sum of Elements",
      difficulty: "Easy",
      problem: "Find the sum of all elements in the array.",
      examples: `Input: nums = [50,20,30,3,20,10,9,1]
Output: 143`,
      starterCode: `def findSum(nums):
    pass`,
      solution: `def findSum(nums):
    return sum(nums)`,
      hints: ["Use Python built-in sum()", "Or use loop and accumulator"]
    },

    {
      title: "Find Maximum Element",
      difficulty: "Easy",
      problem: "Find the largest element in the array.",
      examples: `Input: nums = [3,6,7,8,9,9]
Output: 9`,
      starterCode: `def findMax(nums):
    pass`,
      solution: `def findMax(nums):
    return max(nums)`,
      hints: ["Use max()", "Or compare elements one by one"]
    },

    {
      title: "Find Minimum Element",
      difficulty: "Easy",
      problem: "Find the smallest element in the array.",
      examples: `Input: nums = [3,4,9,10,7,0,-1]
Output: -1`,
      starterCode: `def findMin(nums):
    pass`,
      solution: `def findMin(nums):
    return min(nums)`,
      hints: ["Use min()", "Track smallest value while iterating"]
    },

    {
      title: "Print Even Numbers",
      difficulty: "Easy",
      problem: "Return all even numbers present in the array.",
      examples: `Input: nums = [1,3,5,7,9,0]
Output: [0]`,
      starterCode: `def evenNumbers(nums):
    pass`,
      solution: `def evenNumbers(nums):
    return [i for i in nums if i % 2 == 0]`,
      hints: ["Check num % 2 == 0", "Use list comprehension"]
    },

    {
      title: "Print Odd Numbers",
      difficulty: "Easy",
      problem: "Return all odd numbers present in the array.",
      examples: `Input: nums = [1,0,2,9,4,6,7]
Output: [1,9,7]`,
      starterCode: `def oddNumbers(nums):
    pass`,
      solution: `def oddNumbers(nums):
    return [i for i in nums if i % 2 != 0]`,
      hints: ["Check num % 2 != 0", "Store matching elements"]
    },

    {
      title: "Print Even Number Sum",
      difficulty: "Easy",
      problem: "Find the sum of all even numbers in the array.",
      examples: `Input: nums = [2,4,5,6,1,3,7]
Output: 12`,
      starterCode: `def evenSum(nums):
    pass`,
      solution: `def evenSum(nums):
    return sum(i for i in nums if i % 2 == 0)`,
      hints: ["Filter even numbers", "Then add them"]
    },

    {
      title: "Print Odd Number Sum",
      difficulty: "Easy",
      problem: "Find the sum of all odd numbers in the array.",
      examples: [
        {Input: "nums = [2,7,9,0,3,3,9]",
Output: "31"},
 {Input: "nums = [3,1,9,0,3,3,9]",
Output: "31"},
      ],
      starterCode: `def oddSum(nums):
    pass`,
      solution: `def oddSum(nums):
    return sum(i for i in nums if i % 2 != 0)`,
      hints: ["Check odd condition", "Accumulate sum"]
    },

    {
      title: "Count Positive Numbers",
      difficulty: "Easy",
      problem: "Count how many positive numbers are present in the array.",
      examples: `Input: nums = [-1,5,0,7,-3,-2]
Output: 2`,
      starterCode: `def countPositive(nums):
    pass`,
      solution: `def countPositive(nums):
    count = 0
    for i in nums:
        if i > 0:
            count += 1
    return count`,
      hints: ["Positive means greater than 0", "Use counter"]
    },

    {
      title: "Reverse Array",
      difficulty: "Easy",
      problem: "Reverse the given array.",
      examples: `Input: nums = [1,2,3,4]
Output: [4,3,2,1]`,
      starterCode: `def reverseArray(nums):
    pass`,
      solution: `def reverseArray(nums):
    return nums[::-1]`,
      hints: ["Use slicing [::-1]", "Or swap using two pointers"]
    },

    {
      title: "Search Element",
      difficulty: "Easy",
      problem: "Search for a key element in the array. Return found or not found.",
      examples: `Input: nums = [10,20,30,40], key = 50
Output: Element not found`,
      starterCode: `def searchElement(nums, key):
    pass`,
      solution: `def searchElement(nums, key):
    if key in nums:
        return "Element found"
    return "Element not found"`,
      hints: ["Use in operator", "Or loop manually and compare"]
    }
  ]
}

];

export default codingQuestions;
