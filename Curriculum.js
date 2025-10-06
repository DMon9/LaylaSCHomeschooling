export const curriculumData = {
    // ===================================
    // ========== 1ST GRADE ==============
    // ===================================
    1: {
        reading: {
            title: "1st Grade Reading",
            units: [
                {
                    title: "Unit 1: The Alphabet & Phonics",
                    items: [
                        { id: "1-reading-0-0", type: "lesson", title: "Letter Sounds", content: "<h1>Learning Letter Sounds</h1><p>Every letter makes a special sound! 'A' says 'ah' like in apple. 'B' says 'buh' like in ball. Let's practice them all!</p>" },
                        { id: "1-reading-0-1", type: "video", title: "The Phonics Song", videoId: "BELlZKpi1Hw", description: "Sing along to learn your letter sounds!" },
                        { id: "1-reading-0-2", type: "quiz", title: "Beginning Sounds Quiz", questions: [
                            { q: "What sound does 'cat' start with?", options: ["c", "b", "t"], a: "c" },
                            { q: "What sound does 'sun' start with?", options: ["r", "s", "m"], a: "s" }
                        ]}
                    ]
                },
                {
                    title: "Unit 2: Sight Words",
                    items: [
                        { id: "1-reading-1-0", type: "lesson", title: "What are Sight Words?", content: "<h1>What are Sight Words?</h1><p>Sight words are words we see so often, we should know them by sight! Words like 'the', 'a', and 'is'. Knowing them makes reading much faster.</p>" },
                        { id: "1-reading-1-1", type: "test", title: "Unit 2 Test", questions: [{ q: "Which word is 'the'?", options: ["the", "a", "is"], a: "the"}]}
                    ]
                }
            ]
        },
        math: {
            title: "1st Grade Math",
            units: [
                {
                    title: "Unit 1: Counting to 120",
                    items: [
                        { id: "1-math-0-0", type: "lesson", title: "Counting Strategy", content: "<h1>Counting Numbers</h1><p>We can count all the way to 120! Let's practice counting by ones, fives, and tens. 10, 20, 30, 40...</p>" },
                        { id: "1-math-0-1", type: "quiz", title: "Number Order Quiz", questions: [
                            { q: "What number comes after 29?", options: ["28", "30", "31"], a: "30" },
                            { q: "What number comes before 50?", options: ["49", "51", "48"], a: "49" }
                        ]}
                    ]
                }
            ]
        },
        // More 1st Grade subjects and units can be added here...
    },
    // ===================================
    // ========== 2ND GRADE ==============
    // ===================================
    2: {
        reading: {
            title: "2nd Grade Reading",
            units: [
                {
                    title: "Unit 1: Main Idea",
                    items: [
                        { id: "2-reading-0-0", type: "lesson", title: "Finding the Main Idea", content: "<h1>What's the Big Idea?</h1><p>The main idea is what a story is mostly about. Let's read a short story and figure out the main idea together!</p>" },
                        { id: "2-reading-0-1", type: "quiz", title: "Main Idea Quiz", questions: [
                            { q: "A story about a dog who plays fetch and goes to the park is mostly about...", options: ["A cat", "A dog's fun day", "The weather"], a: "A dog's fun day" }
                        ]}
                    ]
                }
            ]
        },
        math: {
            title: "2nd Grade Math",
            units: [
                {
                    title: "Unit 1: Double-Digit Addition",
                    items: [
                        { id: "2-math-0-0", type: "lesson", title: "Adding Big Numbers", content: "<h1>Adding with Tens and Ones</h1><p>When we add big numbers like 25 + 12, we add the ones first (5+2=7), then we add the tens (2+1=3). So the answer is 37!</p>" }
                    ]
                }
            ]
        }
    }
};

