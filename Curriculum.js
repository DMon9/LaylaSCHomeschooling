export const curriculumData = {
    // ===================================
    // ========== 1ST GRADE ==============
    // ===================================
    1: {
        reading: {
            title: "1st Grade Reading",
            units: [
                {
                    title: "Unit 1: Phonics Foundations",
                    items: [
                        { id: "1-reading-0-0", type: "lesson", title: "Short Vowel Sounds", content: "<h1>Meet the Short Vowels!</h1><p>The vowels (a, e, i, o, u) can make a short sound. <ul><li><b>a</b> as in <b>a</b>pple</li><li><b>e</b> as in <b>e</b>lephant</li><li><b>i</b> as in <b>i</b>gloo</li><li><b>o</b> as in <b>o</b>ctopus</li><li><b>u</b> as in <b>u</b>mbrella</li></ul></p>" },
                        { id: "1-reading-0-1", type: "video", title: "Short Vowel Song", videoId: "i-U0-Kv-FTs", description: "Sing along and learn the short vowel sounds!" },
                        { id: "1-reading-0-2", type: "game", gameType: "sound-match", title: "Short 'a' Sound Match", targetSound: "a", options: ["cat", "dog", "pen", "map"] },
                        { id: "1-reading-0-3", type: "quiz", title: "Phonics Check-in", questions: [
                            { q: "Which word has the short 'e' sound?", options: ["bed", "bike", "boat"], a: "bed" },
                            { q: "What is the middle sound in 'mop'?", options: ["a", "o", "u"], a: "o" }
                        ]},
                        { id: "1-reading-0-4", type: "test", title: "Unit 1 Test", questions: [
                             { q: "Which animal name has a short 'i' sound?", options: ["pig", "goat", "snake"], a: "pig" },
                             { q: "Which word rhymes with 'sun'?", options: ["fin", "run", "seen"], a: "run" }
                        ]}
                    ]
                },
                {
                    title: "Unit 2: Sight Words & Sentences",
                    items: [
                        { id: "1-reading-1-0", type: "lesson", title: "High-Frequency Words", content: "<h1>What are Sight Words?</h1><p>Sight words are words we learn to recognize instantly! This helps us read faster. Let's learn a new set: 'he', 'she', 'was', 'for', 'on'.</p>" },
                        { id: "1-reading-1-1", type: "game", gameType: "word-scramble", title: "Sight Word Scramble", words: ["the", "and", "you", "see"] },
                        { id: "1-reading-1-2", type: "activity", activityType: "sentence-builder", title: "Build a Sentence", words: ["I", "see", "a", "big", "dog", "."] },
                        { id: "1-reading-1-3", type: "test", title: "Unit 2 Test", questions: [
                            { q: "Which sentence is correct?", options: ["a see I cat", "I see a cat.", "cat see I a"], a: "I see a cat." },
                            { q: "Which word is 'was'?", options: ["saw", "was", "has"], a: "was" }
                        ]}
                    ]
                }
            ]
        },
        math: {
            title: "1st Grade Math",
            units: [
                {
                    title: "Unit 1: Numbers & Counting",
                    items: [
                        { id: "1-math-0-0", type: "lesson", title: "Counting to 120", content: "<h1>Let's Count!</h1><p>We can count objects one by one. We can also count by 2s, 5s, and 10s to count faster! Let's practice counting the stars on this page.</p>" },
                        { id: "1-math-0-1", type: "game", gameType: "number-line", title: "Number Line Hop", max: 20 },
                        { id: "1-math-0-2", type: "activity", activityType: "place-value", title: "Tens and Ones", max: 99 },
                        { id: "1-math-0-3", type: "test", title: "Unit 1 Test", questions: [
                            { q: "What number comes after 89?", options: ["88", "90", "91"], a: "90" },
                            { q: "How many tens are in the number 47?", options: ["7", "4", "0"], a: "4" }
                        ]}
                    ]
                },
                {
                    title: "Unit 2: Addition & Subtraction",
                    items: [
                        { id: "1-math-1-0", type: "lesson", title: "Intro to Addition", content: "<h1>Putting Numbers Together</h1><p>Addition is when we combine groups. If you have 3 apples and get 2 more, you add them together! 3 + 2 = 5 apples.</p>" },
                        { id: "1-math-1-1", type: "video", title: "Addition Song", videoId: "AuX7nPBqDts", description: "A fun song about adding numbers!" },
                        { id: "1-math-1-2", type: "game", gameType: "math-facts", title: "Addition Blast Off", operator: "+", range: 10 },
                        { id: "1-math-1-3", type: "lesson", title: "Intro to Subtraction", content: "<h1>Taking Numbers Away</h1><p>Subtraction is when we take some away from a group. If you have 5 balloons and 1 flies away, you subtract! 5 - 1 = 4 balloons left.</p>" },
                        { id: "1-math-1-4", type: "game", gameType: "math-facts", title: "Subtraction Slicer", operator: "-", range: 10 },
                         { id: "1-math-1-5", type: "test", title: "Unit 2 Test", questions: [
                            { q: "What is 7 + 3?", options: ["9", "10", "11"], a: "10" },
                            { q: "What is 9 - 4?", options: ["5", "6", "4"], a: "5" }
                        ]}
                    ]
                }
            ]
        },
        science: {
            title: "1st Grade Science",
             units: [
                {
                    title: "Unit 1: Plants & Animals",
                    items: [
                        { id: "1-science-0-0", type: "lesson", title: "Living Things", content: "<h1>What Do Living Things Need?</h1><p>All living things, like plants and animals, need a few things to survive: food, water, air, and a place to live (shelter).</p>" },
                        { id: "1-science-0-1", type: "video", title: "Parts of a Plant", videoId: "ql6OL7_q-sU", description: "Learn about roots, stems, leaves, and flowers!" },
                        { id: "1-science-0-2", type: "activity", activityType: "plant-builder", title: "Build a Plant" },
                        { id: "1-science-0-3", type: "test", title: "Unit 1 Test", questions: [
                            { q: "What part of a plant soaks up water from the soil?", options: ["Leaf", "Flower", "Roots"], a: "Roots" },
                            { q: "Which of these is NOT something all animals need?", options: ["Water", "A blanket", "Air"], a: "A blanket" }
                        ]}
                    ]
                }
            ]
        },
        'social-studies': {
            title: "1st Grade Social Studies",
             units: [
                {
                    title: "Unit 1: My Community",
                    items: [
                        { id: "1-social-studies-0-0", type: "lesson", title: "Community Helpers", content: "<h1>People in Our Neighborhood</h1><p>Many people work together to make our community a great place to live. Doctors, firefighters, teachers, and mail carriers all have important jobs that help us.</p>" },
                        { id: "1-social-studies-0-1", type: "game", gameType: "helper-match", title: "Who Helps Us?" },
                        { id: "1-social-studies-0-2", type: "test", title: "Unit 1 Test", questions: [
                            { q: "Who would you call if there was a fire?", options: ["A baker", "A firefighter", "A pilot"], a: "A firefighter" }
                        ]}
                    ]
                }
            ]
        }
    },
    // ===================================
    // ========== 2ND GRADE ==============
    // ===================================
    2: {
        reading: {
            title: "2nd Grade Reading",
            units: [
                {
                    title: "Unit 1: Deeper Reading",
                    items: [
                        { id: "2-reading-0-0", type: "lesson", title: "Main Idea & Details", content: "<h1>Finding the Main Idea</h1><p>The main idea is the most important point of a story. Details are the smaller pieces of information that tell us more about the main idea.</p>" },
                        { id: "2-reading-0-1", type: "activity", activityType: "main-idea-sort", title: "Main Idea Sort" },
                        { id: "2-reading-0-2", type: "test", title: "Unit 1 Test", questions: [
                            { q: "If a story is about a bear catching fish, sleeping in a cave, and climbing trees, what is the main idea?", options: ["Fish are yummy", "A bear's life in the wild", "Caves are dark"], a: "A bear's life in the wild" }
                        ]}
                    ]
                }
            ]
        },
        math: {
            title: "2nd Grade Math",
            units: [
                {
                    title: "Unit 1: Advanced Addition",
                    items: [
                        { id: "2-math-0-0", type: "lesson", title: "Double-Digit Addition", content: "<h1>Adding Big Numbers!</h1><p>Let's add 2-digit numbers, like 45 + 23. We always start with the ones place! 5 + 3 = 8. Then we add the tens place! 4 + 2 = 6. The answer is 68!</p>" },
                        { id: "2-math-0-1", type: "game", gameType: "math-facts", title: "2-Digit Addition Challenge", operator: "+", range: 99 },
                        { id: "2-math-0-2", type: "test", title: "Unit 1 Test", questions: [
                            { q: "What is 34 + 22?", options: ["56", "55", "65"], a: "56" }
                        ]}
                    ]
                }
            ]
        }
    }
};


