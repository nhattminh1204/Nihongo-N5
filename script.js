// Modern Japanese Learning App with AI
document.addEventListener('DOMContentLoaded', function() {
    // Japanese alphabet data
    const hiragana = [
        { char: 'あ', romanji: 'a', group: 'vowels', row: 0 },
        { char: 'い', romanji: 'i', group: 'vowels', row: 1 },
        { char: 'う', romanji: 'u', group: 'vowels', row: 2 },
        { char: 'え', romanji: 'e', group: 'vowels', row: 3 },
        { char: 'お', romanji: 'o', group: 'vowels', row: 4 },
        { char: 'か', romanji: 'ka', group: 'k-line', row: 0 },
        { char: 'き', romanji: 'ki', group: 'k-line', row: 1 },
        { char: 'く', romanji: 'ku', group: 'k-line', row: 2 },
        { char: 'け', romanji: 'ke', group: 'k-line', row: 3 },
        { char: 'こ', romanji: 'ko', group: 'k-line', row: 4 },
        { char: 'さ', romanji: 'sa', group: 's-line', row: 0 },
        { char: 'し', romanji: 'shi', group: 's-line', row: 1 },
        { char: 'す', romanji: 'su', group: 's-line', row: 2 },
        { char: 'せ', romanji: 'se', group: 's-line', row: 3 },
        { char: 'そ', romanji: 'so', group: 's-line', row: 4 },
        { char: 'た', romanji: 'ta', group: 't-line', row: 0 },
        { char: 'ち', romanji: 'chi', group: 't-line', row: 1 },
        { char: 'つ', romanji: 'tsu', group: 't-line', row: 2 },
        { char: 'て', romanji: 'te', group: 't-line', row: 3 },
        { char: 'と', romanji: 'to', group: 't-line', row: 4 },
        { char: 'な', romanji: 'na', group: 'n-line', row: 0 },
        { char: 'に', romanji: 'ni', group: 'n-line', row: 1 },
        { char: 'ぬ', romanji: 'nu', group: 'n-line', row: 2 },
        { char: 'ね', romanji: 'ne', group: 'n-line', row: 3 },
        { char: 'の', romanji: 'no', group: 'n-line', row: 4 },
        { char: 'は', romanji: 'ha', group: 'h-line', row: 0 },
        { char: 'ひ', romanji: 'hi', group: 'h-line', row: 1 },
        { char: 'ふ', romanji: 'fu', group: 'h-line', row: 2 },
        { char: 'へ', romanji: 'he', group: 'h-line', row: 3 },
        { char: 'ほ', romanji: 'ho', group: 'h-line', row: 4 },
        { char: 'ま', romanji: 'ma', group: 'm-line', row: 0 },
        { char: 'み', romanji: 'mi', group: 'm-line', row: 1 },
        { char: 'む', romanji: 'mu', group: 'm-line', row: 2 },
        { char: 'め', romanji: 'me', group: 'm-line', row: 3 },
        { char: 'も', romanji: 'mo', group: 'm-line', row: 4 },
        { char: 'や', romanji: 'ya', group: 'y-line', row: 0 },
        { char: 'ゆ', romanji: 'yu', group: 'y-line', row: 2 },
        { char: 'よ', romanji: 'yo', group: 'y-line', row: 4 },
        { char: 'ら', romanji: 'ra', group: 'r-line', row: 0 },
        { char: 'り', romanji: 'ri', group: 'r-line', row: 1 },
        { char: 'る', romanji: 'ru', group: 'r-line', row: 2 },
        { char: 'れ', romanji: 're', group: 'r-line', row: 3 },
        { char: 'ろ', romanji: 'ro', group: 'r-line', row: 4 },
        { char: 'わ', romanji: 'wa', group: 'w-line', row: 0 },
        { char: 'を', romanji: 'wo', group: 'w-line', row: 1 },
        { char: 'ん', romanji: 'n', group: 'n-special', row: 0 },
        
        // Dakuten
        { char: 'が', romanji: 'ga', group: 'dakuten', row: 0 },
        { char: 'ぎ', romanji: 'gi', group: 'dakuten', row: 1 },
        { char: 'ぐ', romanji: 'gu', group: 'dakuten', row: 2 },
        { char: 'げ', romanji: 'ge', group: 'dakuten', row: 3 },
        { char: 'ご', romanji: 'go', group: 'dakuten', row: 4 },
        { char: 'ざ', romanji: 'za', group: 'dakuten', row: 0 },
        { char: 'じ', romanji: 'ji', group: 'dakuten', row: 1 },
        { char: 'ず', romanji: 'zu', group: 'dakuten', row: 2 },
        { char: 'ぜ', romanji: 'ze', group: 'dakuten', row: 3 },
        { char: 'ぞ', romanji: 'zo', group: 'dakuten', row: 4 },
        { char: 'だ', romanji: 'da', group: 'dakuten', row: 0 },
        { char: 'ぢ', romanji: 'di', group: 'dakuten', row: 1 },
        { char: 'づ', romanji: 'du', group: 'dakuten', row: 2 },
        { char: 'で', romanji: 'de', group: 'dakuten', row: 3 },
        { char: 'ど', romanji: 'do', group: 'dakuten', row: 4 },
        { char: 'ば', romanji: 'ba', group: 'dakuten', row: 0 },
        { char: 'び', romanji: 'bi', group: 'dakuten', row: 1 },
        { char: 'ぶ', romanji: 'bu', group: 'dakuten', row: 2 },
        { char: 'べ', romanji: 'be', group: 'dakuten', row: 3 },
        { char: 'ぼ', romanji: 'bo', group: 'dakuten', row: 4 },
        { char: 'ぱ', romanji: 'pa', group: 'dakuten', row: 0 },
        { char: 'ぴ', romanji: 'pi', group: 'dakuten', row: 1 },
        { char: 'ぷ', romanji: 'pu', group: 'dakuten', row: 2 },
        { char: 'ぺ', romanji: 'pe', group: 'dakuten', row: 3 },
        { char: 'ぽ', romanji: 'po', group: 'dakuten', row: 4 },
        
        // Combination
        { char: 'きゃ', romanji: 'kya', group: 'combination', row: 0 },
        { char: 'きゅ', romanji: 'kyu', group: 'combination', row: 1 },
        { char: 'きょ', romanji: 'kyo', group: 'combination', row: 2 },
        { char: 'しゃ', romanji: 'sha', group: 'combination', row: 0 },
        { char: 'しゅ', romanji: 'shu', group: 'combination', row: 1 },
        { char: 'しょ', romanji: 'sho', group: 'combination', row: 2 },
        { char: 'ちゃ', romanji: 'cha', group: 'combination', row: 0 },
        { char: 'ちゅ', romanji: 'chu', group: 'combination', row: 1 },
        { char: 'ちょ', romanji: 'cho', group: 'combination', row: 2 },
        { char: 'にゃ', romanji: 'nya', group: 'combination', row: 0 },
        { char: 'にゅ', romanji: 'nyu', group: 'combination', row: 1 },
        { char: 'にょ', romanji: 'nyo', group: 'combination', row: 2 },
        { char: 'ひゃ', romanji: 'hya', group: 'combination', row: 0 },
        { char: 'ひゅ', romanji: 'hyu', group: 'combination', row: 1 },
        { char: 'ひょ', romanji: 'hyo', group: 'combination', row: 2 },
        { char: 'みゃ', romanji: 'mya', group: 'combination', row: 0 },
        { char: 'みゅ', romanji: 'myu', group: 'combination', row: 1 },
        { char: 'みょ', romanji: 'myo', group: 'combination', row: 2 },
        { char: 'りゃ', romanji: 'rya', group: 'combination', row: 0 },
        { char: 'りゅ', romanji: 'ryu', group: 'combination', row: 1 },
        { char: 'りょ', romanji: 'ryo', group: 'combination', row: 2 },
        { char: 'ぎゃ', romanji: 'gya', group: 'combination', row: 0 },
        { char: 'ぎゅ', romanji: 'gyu', group: 'combination', row: 1 },
        { char: 'ぎょ', romanji: 'gyo', group: 'combination', row: 2 },
        { char: 'じゃ', romanji: 'ja', group: 'combination', row: 0 },
        { char: 'じゅ', romanji: 'ju', group: 'combination', row: 1 },
        { char: 'じょ', romanji: 'jo', group: 'combination', row: 2 },
        { char: 'びゃ', romanji: 'bya', group: 'combination', row: 0 },
        { char: 'びゅ', romanji: 'byu', group: 'combination', row: 1 },
        { char: 'びょ', romanji: 'byo', group: 'combination', row: 2 },
        { char: 'ぴゃ', romanji: 'pya', group: 'combination', row: 0 },
        { char: 'ぴゅ', romanji: 'pyu', group: 'combination', row: 1 },
        { char: 'ぴょ', romanji: 'pyo', group: 'combination', row: 2 }
    ];

    const katakana = [
        { char: 'ア', romanji: 'a', group: 'vowels', row: 0 },
        { char: 'イ', romanji: 'i', group: 'vowels', row: 1 },
        { char: 'ウ', romanji: 'u', group: 'vowels', row: 2 },
        { char: 'エ', romanji: 'e', group: 'vowels', row: 3 },
        { char: 'オ', romanji: 'o', group: 'vowels', row: 4 },
        { char: 'カ', romanji: 'ka', group: 'k-line', row: 0 },
        { char: 'キ', romanji: 'ki', group: 'k-line', row: 1 },
        { char: 'ク', romanji: 'ku', group: 'k-line', row: 2 },
        { char: 'ケ', romanji: 'ke', group: 'k-line', row: 3 },
        { char: 'コ', romanji: 'ko', group: 'k-line', row: 4 },
        { char: 'サ', romanji: 'sa', group: 's-line', row: 0 },
        { char: 'シ', romanji: 'shi', group: 's-line', row: 1 },
        { char: 'ス', romanji: 'su', group: 's-line', row: 2 },
        { char: 'セ', romanji: 'se', group: 's-line', row: 3 },
        { char: 'ソ', romanji: 'so', group: 's-line', row: 4 },
        { char: 'タ', romanji: 'ta', group: 't-line', row: 0 },
        { char: 'チ', romanji: 'chi', group: 't-line', row: 1 },
        { char: 'ツ', romanji: 'tsu', group: 't-line', row: 2 },
        { char: 'テ', romanji: 'te', group: 't-line', row: 3 },
        { char: 'ト', romanji: 'to', group: 't-line', row: 4 },
        { char: 'ナ', romanji: 'na', group: 'n-line', row: 0 },
        { char: 'ニ', romanji: 'ni', group: 'n-line', row: 1 },
        { char: 'ヌ', romanji: 'nu', group: 'n-line', row: 2 },
        { char: 'ネ', romanji: 'ne', group: 'n-line', row: 3 },
        { char: 'ノ', romanji: 'no', group: 'n-line', row: 4 },
        { char: 'ハ', romanji: 'ha', group: 'h-line', row: 0 },
        { char: 'ヒ', romanji: 'hi', group: 'h-line', row: 1 },
        { char: 'フ', romanji: 'fu', group: 'h-line', row: 2 },
        { char: 'ヘ', romanji: 'he', group: 'h-line', row: 3 },
        { char: 'ホ', romanji: 'ho', group: 'h-line', row: 4 },
        { char: 'マ', romanji: 'ma', group: 'm-line', row: 0 },
        { char: 'ミ', romanji: 'mi', group: 'm-line', row: 1 },
        { char: 'ム', romanji: 'mu', group: 'm-line', row: 2 },
        { char: 'メ', romanji: 'me', group: 'm-line', row: 3 },
        { char: 'モ', romanji: 'mo', group: 'm-line', row: 4 },
        { char: 'ヤ', romanji: 'ya', group: 'y-line', row: 0 },
        { char: 'ユ', romanji: 'yu', group: 'y-line', row: 2 },
        { char: 'ヨ', romanji: 'yo', group: 'y-line', row: 4 },
        { char: 'ラ', romanji: 'ra', group: 'r-line', row: 0 },
        { char: 'リ', romanji: 'ri', group: 'r-line', row: 1 },
        { char: 'ル', romanji: 'ru', group: 'r-line', row: 2 },
        { char: 'レ', romanji: 're', group: 'r-line', row: 3 },
        { char: 'ロ', romanji: 'ro', group: 'r-line', row: 4 },
        { char: 'ワ', romanji: 'wa', group: 'w-line', row: 0 },
        { char: 'ヲ', romanji: 'wo', group: 'w-line', row: 1 },
        { char: 'ン', romanji: 'n', group: 'n-special', row: 0 },
        
        // Dakuten
        { char: 'ガ', romanji: 'ga', group: 'dakuten', row: 0 },
        { char: 'ギ', romanji: 'gi', group: 'dakuten', row: 1 },
        { char: 'グ', romanji: 'gu', group: 'dakuten', row: 2 },
        { char: 'ゲ', romanji: 'ge', group: 'dakuten', row: 3 },
        { char: 'ゴ', romanji: 'go', group: 'dakuten', row: 4 },
        { char: 'ザ', romanji: 'za', group: 'dakuten', row: 0 },
        { char: 'ジ', romanji: 'ji', group: 'dakuten', row: 1 },
        { char: 'ズ', romanji: 'zu', group: 'dakuten', row: 2 },
        { char: 'ゼ', romanji: 'ze', group: 'dakuten', row: 3 },
        { char: 'ゾ', romanji: 'zo', group: 'dakuten', row: 4 },
        { char: 'ダ', romanji: 'da', group: 'dakuten', row: 0 },
        { char: 'ヂ', romanji: 'di', group: 'dakuten', row: 1 },
        { char: 'ヅ', romanji: 'du', group: 'dakuten', row: 2 },
        { char: 'デ', romanji: 'de', group: 'dakuten', row: 3 },
        { char: 'ド', romanji: 'do', group: 'dakuten', row: 4 },
        { char: 'バ', romanji: 'ba', group: 'dakuten', row: 0 },
        { char: 'ビ', romanji: 'bi', group: 'dakuten', row: 1 },
        { char: 'ブ', romanji: 'bu', group: 'dakuten', row: 2 },
        { char: 'ベ', romanji: 'be', group: 'dakuten', row: 3 },
        { char: 'ボ', romanji: 'bo', group: 'dakuten', row: 4 },
        { char: 'パ', romanji: 'pa', group: 'dakuten', row: 0 },
        { char: 'ピ', romanji: 'pi', group: 'dakuten', row: 1 },
        { char: 'プ', romanji: 'pu', group: 'dakuten', row: 2 },
        { char: 'ペ', romanji: 'pe', group: 'dakuten', row: 3 },
        { char: 'ポ', romanji: 'po', group: 'dakuten', row: 4 },
        
        // Combination
        { char: 'キャ', romanji: 'kya', group: 'combination', row: 0 },
        { char: 'キュ', romanji: 'kyu', group: 'combination', row: 1 },
        { char: 'キョ', romanji: 'kyo', group: 'combination', row: 2 },
        { char: 'シャ', romanji: 'sha', group: 'combination', row: 0 },
        { char: 'シュ', romanji: 'shu', group: 'combination', row: 1 },
        { char: 'ショ', romanji: 'sho', group: 'combination', row: 2 },
        { char: 'チャ', romanji: 'cha', group: 'combination', row: 0 },
        { char: 'チュ', romanji: 'chu', group: 'combination', row: 1 },
        { char: 'チョ', romanji: 'cho', group: 'combination', row: 2 },
        { char: 'ニャ', romanji: 'nya', group: 'combination', row: 0 },
        { char: 'ニュ', romanji: 'nyu', group: 'combination', row: 1 },
        { char: 'ニョ', romanji: 'nyo', group: 'combination', row: 2 },
        { char: 'ヒャ', romanji: 'hya', group: 'combination', row: 0 },
        { char: 'ヒュ', romanji: 'hyu', group: 'combination', row: 1 },
        { char: 'ヒョ', romanji: 'hyo', group: 'combination', row: 2 },
        { char: 'ミャ', romanji: 'mya', group: 'combination', row: 0 },
        { char: 'ミュ', romanji: 'myu', group: 'combination', row: 1 },
        { char: 'ミョ', romanji: 'myo', group: 'combination', row: 2 },
        { char: 'リャ', romanji: 'rya', group: 'combination', row: 0 },
        { char: 'リュ', romanji: 'ryu', group: 'combination', row: 1 },
        { char: 'リョ', romanji: 'ryo', group: 'combination', row: 2 },
        { char: 'ギャ', romanji: 'gya', group: 'combination', row: 0 },
        { char: 'ギュ', romanji: 'gyu', group: 'combination', row: 1 },
        { char: 'ギョ', romanji: 'gyo', group: 'combination', row: 2 },
        { char: 'ジャ', romanji: 'ja', group: 'combination', row: 0 },
        { char: 'ジュ', romanji: 'ju', group: 'combination', row: 1 },
        { char: 'ジョ', romanji: 'jo', group: 'combination', row: 2 },
        { char: 'ビャ', romanji: 'bya', group: 'combination', row: 0 },
        { char: 'ビュ', romanji: 'byu', group: 'combination', row: 1 },
        { char: 'ビョ', romanji: 'byo', group: 'combination', row: 2 },
        { char: 'ピャ', romanji: 'pya', group: 'combination', row: 0 },
        { char: 'ピュ', romanji: 'pyu', group: 'combination', row: 1 },
        { char: 'ピョ', romanji: 'pyo', group: 'combination', row: 2 }
    ];

    // App State
    let currentAlphabet = hiragana;
    let currentMode = 'hiragana';
    let quizCharacters = [];
    let currentQuizIndex = 0;
    let correctAnswers = 0;
    let currentStreak = 0;
    let writingStats = { correct: 0, wrong: 0, total: 0 };
    let writingCharTypes = { basic: true, dakuten: false, combination: false };
    let memoryCharTypes = { basic: true, dakuten: false, combination: false };
    let writingCharPool = [];
    let memoryCharPool = [];
    let memoryCards = [];
    let currentMemoryCard = null;
    let memoryStreakCount = 0;
    let sessionCount = 0;
    let dailyStreak = parseInt(localStorage.getItem('dailyStreak') || '0');
    let totalLearned = parseInt(localStorage.getItem('totalLearned') || '0');

    // Initialize App
    init();

    function init() {
        setupEventListeners();
        initializeMemorySystem();
        updateGlobalStats();
        renderAlphabetTable();
        showNotification('Chào mừng bạn đến với ứng dụng học tiếng Nhật AI! 🎌', 'success');
    }

    function setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                if (mode) {
                    switchMode(mode);
                    updateActiveNav(e.currentTarget);
                }
            });
        });

        // Alphabet controls
        const alphabetGroup = document.getElementById('alphabet-group');
        if (alphabetGroup) {
            alphabetGroup.addEventListener('change', renderAlphabetTable);
        }

        const practiceMode = document.getElementById('practice-mode');
        if (practiceMode) {
            practiceMode.addEventListener('click', () => {
                switchMode('writing');
                showNotification('Bắt đầu luyện tập!', 'success');
            });
        }

        // Quiz controls
        const startQuiz = document.getElementById('start-quiz');
        const submitQuiz = document.getElementById('submit-quiz');
        const skipQuiz = document.getElementById('skip-quiz');
        const nextQuiz = document.getElementById('next-quiz');
        const quizInput = document.getElementById('quiz-input');
        const quizAlphabet = document.getElementById('quiz-alphabet');

        if (startQuiz) startQuiz.addEventListener('click', startQuizSession);
        if (submitQuiz) submitQuiz.addEventListener('click', checkQuizAnswer);
        if (skipQuiz) skipQuiz.addEventListener('click', skipQuizQuestion);
        if (nextQuiz) nextQuiz.addEventListener('click', nextQuizQuestion);
        if (quizAlphabet) quizAlphabet.addEventListener('change', () => {
            showNotification(`Đã chuyển sang ${quizAlphabet.value === 'katakana' ? 'Katakana' : 'Hiragana'}`, 'info');
        });
        
        if (quizInput) {
            quizInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    checkQuizAnswer();
                }
            });
        }

        // Writing controls
        const jpToRomaji = document.getElementById('jp-to-romaji');
        const writingInput = document.getElementById('writing-input');
        const checkWriting = document.getElementById('check-writing');
        const newWriting = document.getElementById('new-writing');
        const showAnswer = document.getElementById('show-answer');
        const voicePractice = document.getElementById('voice-practice');
        const writingAlphabet = document.getElementById('writing-alphabet');
        const basicChars = document.getElementById('basicChars');
        const dakutenChars = document.getElementById('dakutenChars');
        const combinationChars = document.getElementById('combinationChars');
        if (checkWriting) checkWriting.addEventListener('click', checkWritingAnswer);
        if (newWriting) newWriting.addEventListener('click', generateNewWritingChar);
        if (showAnswer) showAnswer.addEventListener('click', showWritingAnswer);
        if (voicePractice) voicePractice.addEventListener('click', speakCurrentChar);
        if (writingAlphabet) writingAlphabet.addEventListener('change', () => {
            writingCharPool = []; // Reset pool when switching alphabet
            generateNewWritingChar();
            showNotification(`Đã chuyển sang ${writingAlphabet.value === 'katakana' ? 'Katakana' : 'Hiragana'}`, 'info');
        });
        
        // Character type checkboxes
        if (basicChars) basicChars.addEventListener('change', updateWritingCharTypes);
        if (dakutenChars) dakutenChars.addEventListener('change', updateWritingCharTypes);
        if (combinationChars) combinationChars.addEventListener('change', updateWritingCharTypes);
        
        // Memory character type checkboxes
        const memoryBasicChars = document.getElementById('memoryBasicChars');
        const memoryDakutenChars = document.getElementById('memoryDakutenChars');
        const memoryCombinationChars = document.getElementById('memoryCombinationChars');
        if (memoryBasicChars) memoryBasicChars.addEventListener('change', updateMemoryCharTypes);
        if (memoryDakutenChars) memoryDakutenChars.addEventListener('change', updateMemoryCharTypes);
        if (memoryCombinationChars) memoryCombinationChars.addEventListener('change', updateMemoryCharTypes);

        // Memory AI controls
        const memoryInput = document.getElementById('memory-input');
        const submitAnswer = document.getElementById('submit-answer');
        const skipMemory = document.getElementById('skip-memory');
        const voiceInput = document.getElementById('voice-input');
        const memoryAlphabet = document.getElementById('memory-alphabet');

        if (submitAnswer) submitAnswer.addEventListener('click', checkMemoryAnswer);
        if (skipMemory) skipMemory.addEventListener('click', () => answerMemoryCard(1));
        if (voiceInput) voiceInput.addEventListener('click', startVoiceInput);
        if (memoryAlphabet) memoryAlphabet.addEventListener('change', () => {
            createInitialMemoryCards();
            updateMemoryStats();
            loadNextMemoryCard();
            showNotification(`Đã chuyển sang ${memoryAlphabet.value === 'katakana' ? 'Katakana' : 'Hiragana'}`, 'info');
        });

        // Difficulty buttons
        ['again-btn', 'hard-btn', 'good-btn', 'easy-btn'].forEach((id, index) => {
            const btn = document.getElementById(id);
            if (btn) {
                const intervals = [1, 6, 1440, 5760]; // minutes
                btn.addEventListener('click', () => answerMemoryCard(intervals[index]));
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyboardShortcuts);

        // Achievement modal
        const closeAchievement = document.getElementById('close-achievement');
        if (closeAchievement) {
            closeAchievement.addEventListener('click', closeAchievementModal);
        }
    }

    function handleKeyboardShortcuts(e) {
        const writingInput = document.getElementById('writing-input');
        const memoryInput = document.getElementById('memory-input');

        if (e.key === 'Enter') {
            if (currentMode === 'writing' && document.activeElement === writingInput) {
                e.preventDefault();
                checkWritingAnswer();
            } else if (currentMode === 'memory' && document.activeElement === memoryInput) {
                e.preventDefault();
                checkMemoryAnswer();
            } else if (currentMode === 'quiz') {
                const quizInput = document.getElementById('quiz-input');
                if (document.activeElement === quizInput) {
                    e.preventDefault();
                    checkQuizAnswer();
                }
            }
        } else if (e.key === ' ' && currentMode === 'writing') {
            e.preventDefault();
            generateNewWritingChar();
        } else if (e.key === 'Escape') {
            closeAchievementModal();
        }
    }

    function switchMode(mode) {
        currentMode = mode;
        
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(`${mode}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Mode-specific initialization
        switch (mode) {
            case 'hiragana':
                currentAlphabet = hiragana;
                document.getElementById('alphabet-section').classList.add('active');
                renderAlphabetTable();
                break;
            case 'katakana':
                currentAlphabet = katakana;
                document.getElementById('alphabet-section').classList.add('active');
                renderAlphabetTable();
                break;
            case 'writing':
                document.getElementById('writing-section').classList.add('active');
                generateNewWritingChar();
                setTimeout(() => {
                    const input = document.getElementById('writing-input');
                    if (input) input.focus();
                }, 100);
                break;
        }
    }

    function updateActiveNav(activeBtn) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    // Alphabet Table Rendering
    function renderAlphabetTable() {
        renderBasicTable();
        renderDakutenTable();
        renderCombinationTable();
    }

    function renderBasicTable() {
        const basicTable = document.getElementById('basic-table');
        if (!basicTable) {
            console.log('Basic table element not found');
            return;
        }

        const basicGroups = ['vowels', 'k-line', 's-line', 't-line', 'n-line', 'h-line', 'm-line', 'y-line', 'r-line', 'w-line', 'n-special'];
        const rowLabels = ['A', 'K', 'S', 'T', 'N', 'H', 'M', 'Y', 'R', 'W', 'ん'];
        
        console.log('Rendering basic table with', currentAlphabet.length, 'characters');
        renderTable(basicTable, basicGroups, rowLabels);
    }

    function renderDakutenTable() {
        const dakutenTable = document.getElementById('dakuten-table');
        if (!dakutenTable) return;

        dakutenTable.innerHTML = '';
        const dakutenChars = currentAlphabet.filter(c => c.group === 'dakuten');
        
        if (dakutenChars.length === 0) {
            dakutenTable.innerHTML = '<div class="empty-message">Không có ký tự âm đục</div>';
            return;
        }

        const dakutenRows = [
            { label: currentAlphabet === hiragana ? 'が' : 'ガ', chars: dakutenChars.filter(c => ['ga', 'gi', 'gu', 'ge', 'go'].includes(c.romanji)) },
            { label: currentAlphabet === hiragana ? 'ざ' : 'ザ', chars: dakutenChars.filter(c => ['za', 'ji', 'zu', 'ze', 'zo'].includes(c.romanji)) },
            { label: currentAlphabet === hiragana ? 'だ' : 'ダ', chars: dakutenChars.filter(c => ['da', 'di', 'du', 'de', 'do'].includes(c.romanji)) },
            { label: currentAlphabet === hiragana ? 'ば' : 'バ', chars: dakutenChars.filter(c => ['ba', 'bi', 'bu', 'be', 'bo'].includes(c.romanji)) },
            { label: currentAlphabet === hiragana ? 'ぱ' : 'パ', chars: dakutenChars.filter(c => ['pa', 'pi', 'pu', 'pe', 'po'].includes(c.romanji)) }
        ];

        dakutenRows.forEach(row => {
            if (row.chars.length === 0) return;
            
            const tableRow = document.createElement('div');
            tableRow.className = 'table-row';

            const labelCell = document.createElement('div');
            labelCell.className = 'row-label';
            labelCell.textContent = row.label;
            tableRow.appendChild(labelCell);

            row.chars.forEach(char => {
                const cell = document.createElement('div');
                cell.className = 'table-cell';
                cell.innerHTML = `
                    <div class="char-display" onclick="speakChar('${char.romanji}')">
                        <div class="japanese-char">${char.char}</div>
                        <div class="romanji">${char.romanji}</div>
                    </div>
                `;
                tableRow.appendChild(cell);
            });

            dakutenTable.appendChild(tableRow);
        });
    }

    function renderCombinationTable() {
        const combinationTable = document.getElementById('combination-table');
        if (!combinationTable) return;

        combinationTable.innerHTML = '';
        const combinationChars = currentAlphabet.filter(c => c.group === 'combination');
        
        if (combinationChars.length === 0) {
            combinationTable.innerHTML = '<div class="empty-message">Không có ký tự âm ghép</div>';
            return;
        }

        const combinationRows = [
            { label: 'K', chars: combinationChars.filter(c => c.romanji.includes('ky')) },
            { label: 'S', chars: combinationChars.filter(c => c.romanji.includes('sh')) },
            { label: 'T', chars: combinationChars.filter(c => c.romanji.includes('ch')) },
            { label: 'N', chars: combinationChars.filter(c => c.romanji.includes('ny')) },
            { label: 'H', chars: combinationChars.filter(c => c.romanji.includes('hy')) },
            { label: 'M', chars: combinationChars.filter(c => c.romanji.includes('my')) },
            { label: 'R', chars: combinationChars.filter(c => c.romanji.includes('ry')) },
            { label: 'G', chars: combinationChars.filter(c => c.romanji.includes('gy')) },
            { label: 'J', chars: combinationChars.filter(c => c.romanji.includes('j')) },
            { label: 'B', chars: combinationChars.filter(c => c.romanji.includes('by')) },
            { label: 'P', chars: combinationChars.filter(c => c.romanji.includes('py')) }
        ];

        combinationRows.forEach(row => {
            if (row.chars.length === 0) return;
            
            const tableRow = document.createElement('div');
            tableRow.className = 'table-row';

            const labelCell = document.createElement('div');
            labelCell.className = 'row-label';
            labelCell.textContent = row.label;
            tableRow.appendChild(labelCell);

            row.chars.forEach(char => {
                const cell = document.createElement('div');
                cell.className = 'table-cell';
                cell.innerHTML = `
                    <div class="char-display" onclick="speakChar('${char.romanji}')">
                        <div class="japanese-char">${char.char}</div>
                        <div class="romanji">${char.romanji}</div>
                    </div>
                `;
                tableRow.appendChild(cell);
            });

            combinationTable.appendChild(tableRow);
        });
    }

    function renderTable(container, groups, labels) {
        if (!container) {
            console.log('Container not found for table rendering');
            return;
        }
        
        container.innerHTML = '';
        console.log('Rendering table with groups:', groups);

        groups.forEach((group, index) => {
            const tableRow = document.createElement('div');
            tableRow.className = 'table-row';

            const labelCell = document.createElement('div');
            labelCell.className = 'row-label';
            labelCell.textContent = labels[index];
            tableRow.appendChild(labelCell);

            for (let i = 0; i < 5; i++) {
                const charData = currentAlphabet.find(c => 
                    c.group === group && c.row === i
                );

                const cell = document.createElement('div');
                cell.className = 'table-cell';

                if (charData) {
                    cell.innerHTML = `
                        <div class="char-display" onclick="speakChar('${charData.romanji}')" style="cursor: pointer;">
                            <div class="japanese-char" style="font-size: 24px; font-weight: bold; color: #2c3e50;">${charData.char}</div>
                            <div class="romanji" style="font-size: 12px; color: #7f8c8d; margin-top: 4px;">${charData.romanji}</div>
                        </div>
                    `;
                } else if (group === 'y-line' && (i === 1 || i === 3)) {
                    cell.innerHTML = '<div class="char-display empty-cell" style="opacity: 0.3;"></div>';
                } else if (group === 'w-line' && (i === 2 || i === 3 || i === 4)) {
                    cell.innerHTML = '<div class="char-display empty-cell" style="opacity: 0.3;"></div>';
                } else if (group === 'n-special' && i > 0) {
                    cell.innerHTML = '<div class="char-display empty-cell" style="opacity: 0.3;"></div>';
                } else {
                    cell.innerHTML = '<div class="char-display empty-cell" style="opacity: 0.3;"></div>';
                }

                tableRow.appendChild(cell);
            }

            container.appendChild(tableRow);
        });
        
        console.log('Table rendered successfully');
    }

    // Voice & Audio Features
    function speakChar(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }

    function speakCurrentChar() {
        if (currentWritingChar) {
            speakChar(currentWritingChar.romanji);
        }
    }

    // Quiz System
    function startQuiz() {
        // Simple quiz start - just switch to writing mode for now
        switchMode('writing');
        showNotification('Bắt đầu luyện tập!', 'success');
    }

    function startQuizSession() {
        const quizAlphabet = document.getElementById('quiz-alphabet');
        const quizDifficulty = document.getElementById('quiz-difficulty');
        
        if (!quizAlphabet || !quizDifficulty) return;

        const alphabetType = quizAlphabet.value;
        const difficulty = quizDifficulty.value;
        
        // Switch alphabet based on selection
        const selectedAlphabet = alphabetType === 'katakana' ? katakana : hiragana;
        
        quizCharacters = [...selectedAlphabet];

        // Adjust based on difficulty
        const difficultyLimits = { easy: 5, medium: 10, hard: 20, expert: quizCharacters.length };
        quizCharacters = shuffleArray(quizCharacters).slice(0, difficultyLimits[difficulty]);

        if (quizCharacters.length === 0) {
            showNotification('Không có ký tự nào để quiz!', 'error');
            return;
        }

        currentQuizIndex = 0;
        correctAnswers = 0;
        currentStreak = 0;
        
        updateQuizStats();
        showNextQuizCard();
        
        const startBtn = document.getElementById('start-quiz');
        if (startBtn) startBtn.textContent = 'Làm Lại';
        
        showNotification(`Bắt đầu quiz với ${quizCharacters.length} ký tự!`, 'info');
    }

    function showNextQuizCard() {
        const quizQuestion = document.getElementById('quiz-question');
        const quizInputArea = document.getElementById('quiz-input-area');
        const quizInput = document.getElementById('quiz-input');
        const quizResult = document.getElementById('quiz-result');
        const skipBtn = document.getElementById('skip-quiz');
        const nextBtn = document.getElementById('next-quiz');

        if (!quizQuestion) return;

        if (currentQuizIndex >= quizCharacters.length) {
            const accuracy = Math.round((correctAnswers / quizCharacters.length) * 100);
            quizQuestion.textContent = `Hoàn thành! 🎉 Điểm: ${correctAnswers}/${quizCharacters.length} (${accuracy}%)`;
            
            if (quizInputArea) quizInputArea.style.display = 'none';
            if (skipBtn) skipBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            
            if (accuracy >= 80) {
                showAchievement('Quiz Master!', `Bạn đạt ${accuracy}% độ chính xác!`);
            }
            return;
        }

        const currentChar = quizCharacters[currentQuizIndex];
        quizQuestion.textContent = currentChar.char;
        
        if (quizInputArea) quizInputArea.style.display = 'flex';
        if (quizInput) {
            quizInput.value = '';
            quizInput.focus();
        }
        if (quizResult) quizResult.innerHTML = '';
        if (skipBtn) skipBtn.style.display = 'inline-flex';
        if (nextBtn) nextBtn.style.display = 'none';
    }

    function checkQuizAnswer() {
        const quizInput = document.getElementById('quiz-input');
        const quizResult = document.getElementById('quiz-result');
        const nextBtn = document.getElementById('next-quiz');
        const skipBtn = document.getElementById('skip-quiz');
        
        if (!quizInput || !quizResult || currentQuizIndex >= quizCharacters.length) return;
        
        const userInput = quizInput.value.trim().toLowerCase();
        const correctAnswer = quizCharacters[currentQuizIndex].romanji.toLowerCase();
        const isCorrect = userInput === correctAnswer;
        
        if (isCorrect) {
            correctAnswers++;
            currentStreak++;
            quizResult.innerHTML = `
                <div class="result-correct">
                    <i class="fas fa-check-circle"></i>
                    Chính xác! 🎉
                </div>
            `;
            showNotification('Đúng rồi! 👏', 'success');
        } else {
            currentStreak = 0;
            quizResult.innerHTML = `
                <div class="result-incorrect">
                    <i class="fas fa-times-circle"></i>
                    Sai rồi! Đáp án: <strong>${correctAnswer}</strong>
                </div>
            `;
        }
        
        quizInput.disabled = true;
        if (nextBtn) nextBtn.style.display = 'inline-flex';
        if (skipBtn) skipBtn.style.display = 'none';
        
        updateQuizStats();
        
        // Auto next after 2 seconds
        setTimeout(() => {
            nextQuizQuestion();
        }, 2000);
    }
    
    function skipQuizQuestion() {
        const quizResult = document.getElementById('quiz-result');
        const correctAnswer = quizCharacters[currentQuizIndex].romanji;
        
        currentStreak = 0;
        if (quizResult) {
            quizResult.innerHTML = `
                <div class="result-skip">
                    <i class="fas fa-forward"></i>
                    Bỏ qua! Đáp án: <strong>${correctAnswer}</strong>
                </div>
            `;
        }
        
        updateQuizStats();
        setTimeout(() => {
            nextQuizQuestion();
        }, 1500);
    }
    
    function nextQuizQuestion() {
        const quizInput = document.getElementById('quiz-input');
        if (quizInput) quizInput.disabled = false;
        
        currentQuizIndex++;
        updateQuizStats();
        showNextQuizCard();
    }

    function updateQuizStats() {
        const score = document.getElementById('score');
        const progress = document.getElementById('progress');
        const streak = document.getElementById('streak');

        if (score) score.textContent = `${correctAnswers}/${currentQuizIndex}`;
        if (progress) progress.textContent = `${currentQuizIndex + 1}/${quizCharacters.length}`;
        if (streak) streak.textContent = currentStreak;
    }

    // Writing System
    let writingMode = 'jp-to-romaji';
    let currentWritingChar = null;

    function setWritingMode(mode) {
        writingMode = mode;
        
        const jpBtn = document.getElementById('jp-to-romaji');
        const romajiBtn = document.getElementById('romaji-to-jp');
        
        if (jpBtn && romajiBtn) {
            jpBtn.classList.toggle('active', mode === 'jp-to-romaji');
            romajiBtn.classList.toggle('active', mode === 'romaji-to-jp');
        }
        
        generateNewWritingChar();
    }

    function updateWritingCharTypes() {
        const basicChars = document.getElementById('basicChars');
        const dakutenChars = document.getElementById('dakutenChars');
        const combinationChars = document.getElementById('combinationChars');
        
        writingCharTypes.basic = basicChars ? basicChars.checked : true;
        writingCharTypes.dakuten = dakutenChars ? dakutenChars.checked : false;
        writingCharTypes.combination = combinationChars ? combinationChars.checked : false;
        
        if (!writingCharTypes.basic && !writingCharTypes.dakuten && !writingCharTypes.combination) {
            writingCharTypes.basic = true;
            if (basicChars) basicChars.checked = true;
        }
        
        writingCharPool = []; // Reset pool when selection changes
        generateNewWritingChar();
    }

    function getFilteredChars(alphabetType, charTypes) {
        const selectedAlphabet = alphabetType === 'katakana' ? katakana : hiragana;
        return selectedAlphabet.filter(char => {
            if (charTypes.basic && (char.group === 'vowels' || char.group === 'k-line' || 
                char.group === 's-line' || char.group === 't-line' || char.group === 'n-line' || 
                char.group === 'h-line' || char.group === 'm-line' || char.group === 'y-line' || 
                char.group === 'r-line' || char.group === 'w-line' || char.group === 'n-special')) {
                return true;
            }
            if (charTypes.dakuten && char.group === 'dakuten') {
                return true;
            }
            if (charTypes.combination && char.group === 'combination') {
                return true;
            }
            return false;
        });
    }

    function generateNewWritingChar() {
        const writingAlphabet = document.getElementById('writing-alphabet');
        if (!writingAlphabet) {
            console.log('Writing alphabet selector not found');
            return;
        }

        const alphabetType = writingAlphabet.value;
        const availableChars = getFilteredChars(alphabetType, writingCharTypes);

        console.log('Available chars for writing:', availableChars.length);

        if (availableChars.length === 0) {
            showNotification('Không có ký tự nào được chọn!', 'warning');
            return;
        }

        // Refill pool if empty
        if (writingCharPool.length === 0) {
            writingCharPool = shuffleArray([...availableChars]);
        }

        currentWritingChar = writingCharPool.pop();
        console.log('Current writing char:', currentWritingChar);
        updateWritingDisplay();
        
        const input = document.getElementById('writing-input');
        if (input) {
            input.value = '';
            setTimeout(() => input.focus(), 100);
        }
        
        clearWritingResult();
    }

    function updateWritingDisplay() {
        const question = document.getElementById('writing-question');
        const target = document.getElementById('writing-target');
        const input = document.getElementById('writing-input');

        if (!currentWritingChar) {
            console.log('No current writing char');
            return;
        }
        
        if (!question || !target || !input) {
            console.log('Writing display elements not found');
            return;
        }

        question.textContent = 'Hãy viết cách đọc cho chữ sau:';
        target.textContent = currentWritingChar.char;
        target.className = 'target-char-modern japanese-char';
        target.style.fontSize = '48px';
        target.style.fontWeight = 'bold';
        target.style.color = '#2c3e50';
        input.placeholder = 'Nhập romaji...';
        
        console.log('Writing display updated:', currentWritingChar.char, '->', currentWritingChar.romanji);
    }

    function checkWritingAnswer() {
        const input = document.getElementById('writing-input');
        const result = document.getElementById('writing-result');
        
        if (!input || !result || !currentWritingChar) {
            console.log('Missing elements for checking answer');
            return;
        }

        const userInput = input.value.trim().toLowerCase();
        const correctAnswer = currentWritingChar.romanji.toLowerCase();
        
        console.log('Checking answer:', userInput, 'vs', correctAnswer);

        const isCorrect = userInput === correctAnswer;
        
        writingStats.total++;
        if (isCorrect) {
            writingStats.correct++;
            result.innerHTML = `
                <div class="result-display result-correct" style="color: #27ae60; padding: 10px; margin: 10px 0; border-radius: 8px; background: #d5f4e6;">
                    <i class="fas fa-check-circle"></i>
                    Chính xác! 🎉
                </div>
            `;
            showNotification('Đúng rồi! 👏', 'success');
        } else {
            writingStats.wrong++;
            result.innerHTML = `
                <div class="result-display result-incorrect" style="color: #e74c3c; padding: 10px; margin: 10px 0; border-radius: 8px; background: #fadbd8;">
                    <i class="fas fa-times-circle"></i>
                    Sai rồi! Đáp án: <strong>${correctAnswer}</strong>
                </div>
            `;
            showNotification(`Sai rồi! Đáp án là: ${correctAnswer}`, 'error');
        }

        updateWritingStats();
        
        // Auto generate new char after 2 seconds
        setTimeout(() => {
            generateNewWritingChar();
        }, 2000);
    }

    function showWritingAnswer() {
        const input = document.getElementById('writing-input');
        if (!input || !currentWritingChar) return;

        const answer = currentWritingChar.romanji;
        
        input.value = answer;
        checkWritingAnswer();
    }

    function clearWritingResult() {
        const result = document.getElementById('writing-result');
        if (result) result.innerHTML = '';
    }

    function updateWritingStats() {
        const correct = document.getElementById('writing-correct');
        const wrong = document.getElementById('writing-wrong');
        const accuracy = document.getElementById('writing-accuracy');

        if (correct) correct.textContent = writingStats.correct;
        if (wrong) wrong.textContent = writingStats.wrong;
        if (accuracy) {
            const acc = writingStats.total > 0 
                ? Math.round((writingStats.correct / writingStats.total) * 100)
                : 0;
            accuracy.textContent = `${acc}%`;
        }
    }

    // Memory AI System
    function initializeMemorySystem() {
        const saved = localStorage.getItem('japaneseMemoryCards');
        if (saved) {
            memoryCards = JSON.parse(saved);
        } else {
            createInitialMemoryCards();
        }
        updateMemoryStats();
    }

    function createInitialMemoryCards() {
        const memoryAlphabet = document.getElementById('memory-alphabet');
        const alphabetType = memoryAlphabet ? memoryAlphabet.value : 'hiragana';
        const selectedAlphabet = alphabetType === 'katakana' ? katakana : hiragana;
        
        // Filter existing cards for current alphabet type
        const existingCards = memoryCards.filter(card => card.alphabetType !== alphabetType);
        
        // Create new cards for current alphabet
        const newCards = selectedAlphabet.map(char => ({
            char: char.char,
            romanji: char.romanji,
            group: char.group,
            interval: 0,
            easeFactor: 2.5,
            repetitions: 0,
            nextReview: Date.now(),
            isNew: true,
            difficulty: 'new',
            alphabetType: alphabetType
        }));
        
        memoryCards = [...existingCards, ...newCards];
        saveMemoryCards();
    }

    function saveMemoryCards() {
        localStorage.setItem('japaneseMemoryCards', JSON.stringify(memoryCards));
    }

    function updateMemoryCharTypes() {
        const memoryBasicChars = document.getElementById('memoryBasicChars');
        const memoryDakutenChars = document.getElementById('memoryDakutenChars');
        const memoryCombinationChars = document.getElementById('memoryCombinationChars');
        
        memoryCharTypes.basic = memoryBasicChars ? memoryBasicChars.checked : true;
        memoryCharTypes.dakuten = memoryDakutenChars ? memoryDakutenChars.checked : false;
        memoryCharTypes.combination = memoryCombinationChars ? memoryCombinationChars.checked : false;
        
        if (!memoryCharTypes.basic && !memoryCharTypes.dakuten && !memoryCharTypes.combination) {
            memoryCharTypes.basic = true;
            if (memoryBasicChars) memoryBasicChars.checked = true;
        }
        
        memoryCharPool = []; // Reset pool when selection changes
        loadNextMemoryCard();
    }

    function loadNextMemoryCard() {
        const memoryAlphabet = document.getElementById('memory-alphabet');
        const alphabetType = memoryAlphabet ? memoryAlphabet.value : 'hiragana';
        
        const now = Date.now();
        let dueCards = memoryCards.filter(card => 
            card.nextReview <= now && 
            (card.alphabetType === alphabetType || !card.alphabetType)
        );
        
        dueCards = dueCards.filter(card => {
            if (memoryCharTypes.basic && (card.group === 'vowels' || card.group === 'k-line' || 
                card.group === 's-line' || card.group === 't-line' || card.group === 'n-line' || 
                card.group === 'h-line' || card.group === 'm-line' || card.group === 'y-line' || 
                card.group === 'r-line' || card.group === 'w-line' || card.group === 'n-special')) {
                return true;
            }
            if (memoryCharTypes.dakuten && card.group === 'dakuten') {
                return true;
            }
            if (memoryCharTypes.combination && card.group === 'combination') {
                return true;
            }
            return false;
        });

        if (dueCards.length === 0) {
            showCompletionMessage();
            return;
        }

        // Refill pool if empty
        if (memoryCharPool.length === 0) {
            memoryCharPool = shuffleArray([...dueCards]);
        }

        currentMemoryCard = memoryCharPool.pop();
        displayMemoryCard();
    }

    function displayMemoryCard() {
        if (!currentMemoryCard) return;

        const char = document.getElementById('memory-char');
        const answer = document.getElementById('memory-answer');
        const difficultyLevel = document.getElementById('difficulty-level');
        const input = document.getElementById('memory-input');
        const inputSection = document.getElementById('input-section');
        const answerSection = document.getElementById('answer-section');
        const difficultyButtons = document.getElementById('difficulty-buttons');

        if (char) char.textContent = currentMemoryCard.char;
        if (answer) answer.textContent = currentMemoryCard.romanji;
        
        if (difficultyLevel) {
            if (currentMemoryCard.isNew) {
                difficultyLevel.textContent = 'Mới';
                difficultyLevel.style.background = '#1e90ff';
            } else if (currentMemoryCard.repetitions < 3) {
                difficultyLevel.textContent = 'Học';
                difficultyLevel.style.background = '#ffa502';
            } else {
                difficultyLevel.textContent = 'Thành thạo';
                difficultyLevel.style.background = '#2ed573';
            }
        }

        // Reset UI
        if (inputSection) inputSection.style.display = 'block';
        if (answerSection) answerSection.style.display = 'none';
        if (difficultyButtons) difficultyButtons.style.display = 'none';
        if (input) {
            input.value = '';
            setTimeout(() => input.focus(), 100);
        }

        updateMemoryStreak();
        updateSessionProgress();
    }

    function checkMemoryAnswer() {
        const input = document.getElementById('memory-input');
        const inputSection = document.getElementById('input-section');
        const answerSection = document.getElementById('answer-section');
        const resultDisplay = document.getElementById('result-display');
        const difficultyButtons = document.getElementById('difficulty-buttons');
        const aiAnalysis = document.getElementById('ai-analysis');
        const nextReview = document.getElementById('next-review');

        if (!input || !currentMemoryCard) return;

        const userInput = input.value.trim().toLowerCase();
        const correctAnswer = currentMemoryCard.romanji.toLowerCase();
        const isCorrect = userInput === correctAnswer;

        // Show result
        if (inputSection) inputSection.style.display = 'none';
        if (answerSection) answerSection.style.display = 'block';
        if (difficultyButtons) difficultyButtons.style.display = 'flex';

        if (resultDisplay) {
            if (isCorrect) {
                resultDisplay.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    Chính xác! Tuyệt vời! 🎉
                `;
                resultDisplay.className = 'result-display-ai result-correct';
                memoryStreakCount++;
                
                if (aiAnalysis) aiAnalysis.textContent = 'AI: Bạn đã nhớ rất tốt!';
                if (nextReview) nextReview.textContent = 'Ôn lại sau: 1 ngày';
                
                // Auto-advance for correct answers
                setTimeout(() => {
                    const interval = currentMemoryCard.isNew || currentMemoryCard.repetitions < 2 ? 1440 : 5760;
                    answerMemoryCard(interval);
                }, 1500);
            } else {
                resultDisplay.innerHTML = `
                    <i class="fas fa-times-circle"></i>
                    Chưa đúng. Hãy thử lại! 😊
                `;
                resultDisplay.className = 'result-display-ai result-incorrect';
                memoryStreakCount = 0;
                
                if (aiAnalysis) aiAnalysis.textContent = 'AI: Cần luyện tập thêm ký tự này';
                if (nextReview) nextReview.textContent = 'Ôn lại sau: 1 phút';
                
                // Auto-advance for wrong answers
                setTimeout(() => {
                    answerMemoryCard(1);
                }, 2000);
            }
        }

        updateMemoryStreak();
        sessionCount++;
        updateSessionProgress();
    }

    function answerMemoryCard(intervalMinutes) {
        if (!currentMemoryCard) return;

        // Update card based on spaced repetition algorithm
        currentMemoryCard.isNew = false;
        currentMemoryCard.nextReview = Date.now() + (intervalMinutes * 60 * 1000);

        if (intervalMinutes === 1) { // Again
            currentMemoryCard.repetitions = 0;
            currentMemoryCard.easeFactor = Math.max(1.3, currentMemoryCard.easeFactor - 0.2);
            currentMemoryCard.difficulty = 'hard';
        } else if (intervalMinutes === 6) { // Hard
            currentMemoryCard.repetitions++;
            currentMemoryCard.easeFactor = Math.max(1.3, currentMemoryCard.easeFactor - 0.15);
            currentMemoryCard.difficulty = 'medium';
        } else if (intervalMinutes === 1440) { // Good
            currentMemoryCard.repetitions++;
            currentMemoryCard.difficulty = 'easy';
            if (currentMemoryCard.repetitions === 1) {
                currentMemoryCard.interval = 1440;
            } else if (currentMemoryCard.repetitions === 2) {
                currentMemoryCard.interval = 4320;
            } else {
                currentMemoryCard.interval = Math.round(currentMemoryCard.interval * currentMemoryCard.easeFactor);
            }
        } else { // Easy
            currentMemoryCard.repetitions++;
            currentMemoryCard.easeFactor += 0.15;
            currentMemoryCard.difficulty = 'mastered';
            if (currentMemoryCard.repetitions === 1) {
                currentMemoryCard.interval = 5760;
            } else {
                currentMemoryCard.interval = Math.round(currentMemoryCard.interval * currentMemoryCard.easeFactor * 1.3);
            }
        }

        saveMemoryCards();
        updateMemoryStats();
        
        // Check for achievements
        if (sessionCount > 0 && sessionCount % 10 === 0) {
            showAchievement('Siêu Tập Trung!', `Bạn đã hoàn thành ${sessionCount} thẻ trong phiên này!`);
        }
        
        if (memoryStreakCount > 0 && memoryStreakCount % 5 === 0) {
            showAchievement('Streak Master!', `Chuỗi đúng ${memoryStreakCount} lần liên tiếp!`);
        }

        loadNextMemoryCard();
    }

    function updateMemoryStats() {
        const now = Date.now();
        let learned = 0, review = 0, newCards = 0;

        memoryCards.forEach(card => {
            if (card.isNew) {
                newCards++;
            } else if (card.nextReview <= now) {
                review++;
            } else {
                learned++;
            }
        });

        const learnedCount = document.getElementById('learned-count');
        const reviewCount = document.getElementById('review-count');
        const newCount = document.getElementById('new-count');

        if (learnedCount) learnedCount.textContent = learned;
        if (reviewCount) reviewCount.textContent = review;
        if (newCount) newCount.textContent = newCards;
    }

    function updateMemoryStreak() {
        const streak = document.getElementById('memory-streak');
        if (streak) {
            streak.textContent = memoryStreakCount;
            
            if (memoryStreakCount > 0 && memoryStreakCount % 5 === 0) {
                streak.style.animation = 'none';
                setTimeout(() => {
                    streak.style.animation = 'bounce 1s ease';
                }, 10);
            }
        }
    }

    function updateSessionProgress() {
        const progressFill = document.getElementById('session-progress');
        const sessionCountEl = document.getElementById('session-count');
        
        const targetSession = 20;
        const progress = Math.min((sessionCount / targetSession) * 100, 100);
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (sessionCountEl) sessionCountEl.textContent = `${sessionCount}/${targetSession}`;
        
        if (sessionCount >= targetSession) {
            showAchievement('Hoàn Thành Mục Tiêu!', 'Bạn đã hoàn thành 20 thẻ hôm nay! 🎯');
        }
    }

    function showCompletionMessage() {
        const char = document.getElementById('memory-char');
        const answer = document.getElementById('memory-answer');
        
        if (char) char.textContent = '🎉';
        if (answer) answer.textContent = 'Hoàn thành! Tất cả thẻ đã được ôn tập.';
        
        showNotification('Tuyệt vời! Bạn đã hoàn thành tất cả thẻ cần ôn hôm nay! 🎊', 'success');
    }

    // Voice & Audio Features
    function speakChar(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }

    function speakCurrentChar() {
        if (currentWritingChar) {
            speakChar(currentWritingChar.romanji);
        }
    }

    function startVoiceInput() {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.lang = 'en-US';
            recognition.onresult = function(event) {
                const input = document.getElementById('memory-input');
                if (input && event.results[0]) {
                    input.value = event.results[0][0].transcript.toLowerCase();
                    checkMemoryAnswer();
                }
            };
            recognition.start();
            showNotification('Đang nghe... Hãy nói cách đọc', 'info');
        } else {
            showNotification('Trình duyệt không hỗ trợ nhận diện giọng nói', 'error');
        }
    }

    // Utility Functions
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    function updateGlobalStats() {
        const dailyStreakEl = document.getElementById('daily-streak');
        const totalLearnedEl = document.getElementById('total-learned');
        const footerLearned = document.getElementById('footer-learned');
        const footerAccuracy = document.getElementById('footer-accuracy');

        if (dailyStreakEl) dailyStreakEl.textContent = dailyStreak;
        if (totalLearnedEl) totalLearnedEl.textContent = totalLearned;
        if (footerLearned) footerLearned.textContent = totalLearned;
        
        const accuracy = writingStats.total > 0 
            ? Math.round((writingStats.correct / writingStats.total) * 100)
            : 0;
        if (footerAccuracy) footerAccuracy.textContent = `${accuracy}%`;
    }

    // Notification System
    function showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;

        container.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    function getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            info: 'info-circle',
            warning: 'exclamation-triangle'
        };
        return icons[type] || 'info-circle';
    }

    // Achievement System
    function showAchievement(title, description) {
        const modal = document.getElementById('achievement-modal');
        const titleEl = document.getElementById('achievement-title');
        const descEl = document.getElementById('achievement-description');

        if (modal && titleEl && descEl) {
            titleEl.textContent = title;
            descEl.textContent = description;
            modal.classList.add('show');
            
            // Update stats
            totalLearned++;
            localStorage.setItem('totalLearned', totalLearned.toString());
            updateGlobalStats();
        }
    }

    function closeAchievementModal() {
        const modal = document.getElementById('achievement-modal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    // Loading Bar
    function showLoadingBar() {
        const loadingBar = document.getElementById('loading-bar');
        const progress = loadingBar?.querySelector('.loading-progress');
        
        if (loadingBar && progress) {
            loadingBar.style.display = 'block';
            progress.style.width = '0%';
            
            let width = 0;
            const interval = setInterval(() => {
                width += Math.random() * 30;
                if (width >= 100) {
                    width = 100;
                    clearInterval(interval);
                    setTimeout(() => {
                        loadingBar.style.display = 'none';
                    }, 500);
                }
                progress.style.width = width + '%';
            }, 200);
        }
    }

    // Auto-save progress
    setInterval(() => {
        localStorage.setItem('writingStats', JSON.stringify(writingStats));
        localStorage.setItem('memoryStreakCount', memoryStreakCount.toString());
        localStorage.setItem('sessionCount', sessionCount.toString());
    }, 30000); // Save every 30 seconds

    // Daily streak management
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisit');
    
    if (lastVisit !== today) {
        if (lastVisit) {
            const lastDate = new Date(lastVisit);
            const todayDate = new Date(today);
            const diffTime = Math.abs(todayDate - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                dailyStreak++;
            } else if (diffDays > 1) {
                dailyStreak = 1;
            }
        } else {
            dailyStreak = 1;
        }
        
        localStorage.setItem('dailyStreak', dailyStreak.toString());
        localStorage.setItem('lastVisit', today);
        updateGlobalStats();
    }

    // Initialize first character for writing mode
    generateNewWritingChar();
    
    // Add missing event listeners for mode switching
    const jpToRomajiBtn = document.getElementById('jp-to-romaji');
    if (jpToRomajiBtn) {
        jpToRomajiBtn.addEventListener('click', () => setWritingMode('jp-to-romaji'));
    }
    
    // Ensure alphabet table is rendered on load
    setTimeout(() => {
        renderAlphabetTable();
    }, 100);
    
    console.log('🎌 Japanese Learning App initialized successfully!');
});