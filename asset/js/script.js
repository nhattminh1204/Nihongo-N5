// Modern Japanese Learning App with AI - Fixed Version
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
        { char: 'ん', romanji: 'n', group: 'n-special', row: 0 }
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
        { char: 'ン', romanji: 'n', group: 'n-special', row: 0 }
    ];

    // Dakuten (âm đục) - Hiragana
    const hiraganaDakuten = [
        { char: 'が', romanji: 'ga', group: 'g-line', row: 0 },
        { char: 'ぎ', romanji: 'gi', group: 'g-line', row: 1 },
        { char: 'ぐ', romanji: 'gu', group: 'g-line', row: 2 },
        { char: 'げ', romanji: 'ge', group: 'g-line', row: 3 },
        { char: 'ご', romanji: 'go', group: 'g-line', row: 4 },
        { char: 'ざ', romanji: 'za', group: 'z-line', row: 0 },
        { char: 'じ', romanji: 'ji', group: 'z-line', row: 1 },
        { char: 'ず', romanji: 'zu', group: 'z-line', row: 2 },
        { char: 'ぜ', romanji: 'ze', group: 'z-line', row: 3 },
        { char: 'ぞ', romanji: 'zo', group: 'z-line', row: 4 },
        { char: 'だ', romanji: 'da', group: 'd-line', row: 0 },
        { char: 'ぢ', romanji: 'ji', group: 'd-line', row: 1 },
        { char: 'づ', romanji: 'zu', group: 'd-line', row: 2 },
        { char: 'で', romanji: 'de', group: 'd-line', row: 3 },
        { char: 'ど', romanji: 'do', group: 'd-line', row: 4 },
        { char: 'ば', romanji: 'ba', group: 'b-line', row: 0 },
        { char: 'び', romanji: 'bi', group: 'b-line', row: 1 },
        { char: 'ぶ', romanji: 'bu', group: 'b-line', row: 2 },
        { char: 'べ', romanji: 'be', group: 'b-line', row: 3 },
        { char: 'ぼ', romanji: 'bo', group: 'b-line', row: 4 },
        { char: 'ぱ', romanji: 'pa', group: 'p-line', row: 0 },
        { char: 'ぴ', romanji: 'pi', group: 'p-line', row: 1 },
        { char: 'ぷ', romanji: 'pu', group: 'p-line', row: 2 },
        { char: 'ぺ', romanji: 'pe', group: 'p-line', row: 3 },
        { char: 'ぽ', romanji: 'po', group: 'p-line', row: 4 }
    ];

    // Dakuten (âm đục) - Katakana
    const katakanaDakuten = [
        { char: 'ガ', romanji: 'ga', group: 'g-line', row: 0 },
        { char: 'ギ', romanji: 'gi', group: 'g-line', row: 1 },
        { char: 'グ', romanji: 'gu', group: 'g-line', row: 2 },
        { char: 'ゲ', romanji: 'ge', group: 'g-line', row: 3 },
        { char: 'ゴ', romanji: 'go', group: 'g-line', row: 4 },
        { char: 'ザ', romanji: 'za', group: 'z-line', row: 0 },
        { char: 'ジ', romanji: 'ji', group: 'z-line', row: 1 },
        { char: 'ズ', romanji: 'zu', group: 'z-line', row: 2 },
        { char: 'ゼ', romanji: 'ze', group: 'z-line', row: 3 },
        { char: 'ゾ', romanji: 'zo', group: 'z-line', row: 4 },
        { char: 'ダ', romanji: 'da', group: 'd-line', row: 0 },
        { char: 'ヂ', romanji: 'ji', group: 'd-line', row: 1 },
        { char: 'ヅ', romanji: 'zu', group: 'd-line', row: 2 },
        { char: 'デ', romanji: 'de', group: 'd-line', row: 3 },
        { char: 'ド', romanji: 'do', group: 'd-line', row: 4 },
        { char: 'バ', romanji: 'ba', group: 'b-line', row: 0 },
        { char: 'ビ', romanji: 'bi', group: 'b-line', row: 1 },
        { char: 'ブ', romanji: 'bu', group: 'b-line', row: 2 },
        { char: 'ベ', romanji: 'be', group: 'b-line', row: 3 },
        { char: 'ボ', romanji: 'bo', group: 'b-line', row: 4 },
        { char: 'パ', romanji: 'pa', group: 'p-line', row: 0 },
        { char: 'ピ', romanji: 'pi', group: 'p-line', row: 1 },
        { char: 'プ', romanji: 'pu', group: 'p-line', row: 2 },
        { char: 'ペ', romanji: 'pe', group: 'p-line', row: 3 },
        { char: 'ポ', romanji: 'po', group: 'p-line', row: 4 }
    ];

    // Combination (âm ghép) - Hiragana
    const hiraganaCombination = [
        { char: 'きゃ', romanji: 'kya', group: 'ky-line', row: 0 },
        { char: 'きゅ', romanji: 'kyu', group: 'ky-line', row: 1 },
        { char: 'きょ', romanji: 'kyo', group: 'ky-line', row: 2 },
        { char: 'しゃ', romanji: 'sha', group: 'sh-line', row: 0 },
        { char: 'しゅ', romanji: 'shu', group: 'sh-line', row: 1 },
        { char: 'しょ', romanji: 'sho', group: 'sh-line', row: 2 },
        { char: 'ちゃ', romanji: 'cha', group: 'ch-line', row: 0 },
        { char: 'ちゅ', romanji: 'chu', group: 'ch-line', row: 1 },
        { char: 'ちょ', romanji: 'cho', group: 'ch-line', row: 2 },
        { char: 'にゃ', romanji: 'nya', group: 'ny-line', row: 0 },
        { char: 'にゅ', romanji: 'nyu', group: 'ny-line', row: 1 },
        { char: 'にょ', romanji: 'nyo', group: 'ny-line', row: 2 },
        { char: 'ひゃ', romanji: 'hya', group: 'hy-line', row: 0 },
        { char: 'ひゅ', romanji: 'hyu', group: 'hy-line', row: 1 },
        { char: 'ひょ', romanji: 'hyo', group: 'hy-line', row: 2 },
        { char: 'みゃ', romanji: 'mya', group: 'my-line', row: 0 },
        { char: 'みゅ', romanji: 'myu', group: 'my-line', row: 1 },
        { char: 'みょ', romanji: 'myo', group: 'my-line', row: 2 },
        { char: 'りゃ', romanji: 'rya', group: 'ry-line', row: 0 },
        { char: 'りゅ', romanji: 'ryu', group: 'ry-line', row: 1 },
        { char: 'りょ', romanji: 'ryo', group: 'ry-line', row: 2 },
        { char: 'ぎゃ', romanji: 'gya', group: 'gy-line', row: 0 },
        { char: 'ぎゅ', romanji: 'gyu', group: 'gy-line', row: 1 },
        { char: 'ぎょ', romanji: 'gyo', group: 'gy-line', row: 2 },
        { char: 'じゃ', romanji: 'ja', group: 'j-line', row: 0 },
        { char: 'じゅ', romanji: 'ju', group: 'j-line', row: 1 },
        { char: 'じょ', romanji: 'jo', group: 'j-line', row: 2 },
        { char: 'びゃ', romanji: 'bya', group: 'by-line', row: 0 },
        { char: 'びゅ', romanji: 'byu', group: 'by-line', row: 1 },
        { char: 'びょ', romanji: 'byo', group: 'by-line', row: 2 },
        { char: 'ぴゃ', romanji: 'pya', group: 'py-line', row: 0 },
        { char: 'ぴゅ', romanji: 'pyu', group: 'py-line', row: 1 },
        { char: 'ぴょ', romanji: 'pyo', group: 'py-line', row: 2 }
    ];

    // Combination (âm ghép) - Katakana
    const katakanaCombination = [
        { char: 'キャ', romanji: 'kya', group: 'ky-line', row: 0 },
        { char: 'キュ', romanji: 'kyu', group: 'ky-line', row: 1 },
        { char: 'キョ', romanji: 'kyo', group: 'ky-line', row: 2 },
        { char: 'シャ', romanji: 'sha', group: 'sh-line', row: 0 },
        { char: 'シュ', romanji: 'shu', group: 'sh-line', row: 1 },
        { char: 'ショ', romanji: 'sho', group: 'sh-line', row: 2 },
        { char: 'チャ', romanji: 'cha', group: 'ch-line', row: 0 },
        { char: 'チュ', romanji: 'chu', group: 'ch-line', row: 1 },
        { char: 'チョ', romanji: 'cho', group: 'ch-line', row: 2 },
        { char: 'ニャ', romanji: 'nya', group: 'ny-line', row: 0 },
        { char: 'ニュ', romanji: 'nyu', group: 'ny-line', row: 1 },
        { char: 'ニョ', romanji: 'nyo', group: 'ny-line', row: 2 },
        { char: 'ヒャ', romanji: 'hya', group: 'hy-line', row: 0 },
        { char: 'ヒュ', romanji: 'hyu', group: 'hy-line', row: 1 },
        { char: 'ヒョ', romanji: 'hyo', group: 'hy-line', row: 2 },
        { char: 'ミャ', romanji: 'mya', group: 'my-line', row: 0 },
        { char: 'ミュ', romanji: 'myu', group: 'my-line', row: 1 },
        { char: 'ミョ', romanji: 'myo', group: 'my-line', row: 2 },
        { char: 'リャ', romanji: 'rya', group: 'ry-line', row: 0 },
        { char: 'リュ', romanji: 'ryu', group: 'ry-line', row: 1 },
        { char: 'リョ', romanji: 'ryo', group: 'ry-line', row: 2 },
        { char: 'ギャ', romanji: 'gya', group: 'gy-line', row: 0 },
        { char: 'ギュ', romanji: 'gyu', group: 'gy-line', row: 1 },
        { char: 'ギョ', romanji: 'gyo', group: 'gy-line', row: 2 },
        { char: 'ジャ', romanji: 'ja', group: 'j-line', row: 0 },
        { char: 'ジュ', romanji: 'ju', group: 'j-line', row: 1 },
        { char: 'ジョ', romanji: 'jo', group: 'j-line', row: 2 },
        { char: 'ビャ', romanji: 'bya', group: 'by-line', row: 0 },
        { char: 'ビュ', romanji: 'byu', group: 'by-line', row: 1 },
        { char: 'ビョ', romanji: 'byo', group: 'by-line', row: 2 },
        { char: 'ピャ', romanji: 'pya', group: 'py-line', row: 0 },
        { char: 'ピュ', romanji: 'pyu', group: 'py-line', row: 1 },
        { char: 'ピョ', romanji: 'pyo', group: 'py-line', row: 2 }
    ];

    // App State
    let currentAlphabet = hiragana;
    let currentMode = 'hiragana';
    let writingStats = { correct: 0, wrong: 0, total: 0 };
    let writingCharTypes = { basic: true, dakuten: false, combination: false };
    let writingCharPool = [];
    let currentWritingChar = null;

    // Initialize App
    init();

    function init() {
        setupEventListeners();
        renderAlphabetTable();
        generateNewWritingChar();
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

        // Practice mode button
        const practiceMode = document.getElementById('practice-mode');
        if (practiceMode) {
            practiceMode.addEventListener('click', () => {
                switchMode('writing');
                showNotification('Bắt đầu luyện tập!', 'success');
            });
        }

        // Writing controls
        const checkWriting = document.getElementById('check-writing');
        const newWriting = document.getElementById('new-writing');
        const showAnswer = document.getElementById('show-answer');
        const voicePractice = document.getElementById('voice-practice');
        const writingAlphabet = document.getElementById('writing-alphabet');
        const basicChars = document.getElementById('basicChars');
        const dakutenChars = document.getElementById('dakutenChars');
        const combinationChars = document.getElementById('combinationChars');
        const writingInput = document.getElementById('writing-input');

        if (checkWriting) checkWriting.addEventListener('click', checkWritingAnswer);
        if (newWriting) newWriting.addEventListener('click', generateNewWritingChar);
        if (showAnswer) showAnswer.addEventListener('click', showWritingAnswer);
        if (voicePractice) voicePractice.addEventListener('click', speakCurrentChar);
        if (writingAlphabet) writingAlphabet.addEventListener('change', () => {
            writingCharPool = [];
            generateNewWritingChar();
            showNotification(`Đã chuyển sang ${writingAlphabet.value === 'katakana' ? 'Katakana' : 'Hiragana'}`, 'info');
        });
        
        if (basicChars) basicChars.addEventListener('change', updateWritingCharTypes);
        if (dakutenChars) dakutenChars.addEventListener('change', updateWritingCharTypes);
        if (combinationChars) combinationChars.addEventListener('change', updateWritingCharTypes);

        // Keyboard shortcuts
        if (writingInput) {
            writingInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    checkWritingAnswer();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' && currentMode === 'writing') {
                e.preventDefault();
                generateNewWritingChar();
            }
        });
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
                            <div class="japanese-char" style="font-size: 28px; font-weight: bold; color: #2c3e50;">${charData.char}</div>
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

    // Voice & Audio Features - Make speakChar global
    window.speakChar = function(text) {
        console.log('Speaking:', text);
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        } else {
            console.log('Speech synthesis not supported');
        }
    };

    function speakCurrentChar() {
        if (currentWritingChar) {
            window.speakChar(currentWritingChar.romanji);
        }
    }

    // Writing System
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
        
        writingCharPool = [];
        generateNewWritingChar();
    }

    function getFilteredChars(alphabetType, charTypes) {
        let allChars = [];
        
        if (alphabetType === 'katakana') {
            if (charTypes.basic) allChars = allChars.concat(katakana);
            if (charTypes.dakuten) allChars = allChars.concat(katakanaDakuten);
            if (charTypes.combination) allChars = allChars.concat(katakanaCombination);
        } else {
            if (charTypes.basic) allChars = allChars.concat(hiragana);
            if (charTypes.dakuten) allChars = allChars.concat(hiraganaDakuten);
            if (charTypes.combination) allChars = allChars.concat(hiraganaCombination);
        }
        
        return allChars;
    }

    function renderDakutenTable() {
        const dakutenTable = document.getElementById('dakuten-table');
        if (!dakutenTable) return;

        const dakutenData = currentMode === 'katakana' ? katakanaDakuten : hiraganaDakuten;
        const dakutenGroups = ['g-line', 'z-line', 'd-line', 'b-line', 'p-line'];
        const dakutenLabels = ['G', 'Z', 'D', 'B', 'P'];
        
        renderTableWithData(dakutenTable, dakutenGroups, dakutenLabels, dakutenData);
    }

    function renderCombinationTable() {
        const combinationTable = document.getElementById('combination-table');
        if (!combinationTable) return;

        const combinationData = currentMode === 'katakana' ? katakanaCombination : hiraganaCombination;
        const combinationGroups = ['ky-line', 'sh-line', 'ch-line', 'ny-line', 'hy-line', 'my-line', 'ry-line', 'gy-line', 'j-line', 'by-line', 'py-line'];
        const combinationLabels = ['KY', 'SH', 'CH', 'NY', 'HY', 'MY', 'RY', 'GY', 'J', 'BY', 'PY'];
        
        renderTableWithData(combinationTable, combinationGroups, combinationLabels, combinationData);
    }

    function renderTableWithData(container, groups, labels, data) {
        if (!container) return;
        
        container.innerHTML = '';
        
        groups.forEach((group, index) => {
            const tableRow = document.createElement('div');
            tableRow.className = 'table-row';

            const labelCell = document.createElement('div');
            labelCell.className = 'row-label';
            labelCell.textContent = labels[index];
            tableRow.appendChild(labelCell);

            for (let i = 0; i < 3; i++) {
                const charData = data.find(c => c.group === group && c.row === i);

                const cell = document.createElement('div');
                cell.className = 'table-cell';

                if (charData) {
                    cell.innerHTML = `
                        <div class="char-display" onclick="speakChar('${charData.romanji}')" style="cursor: pointer;">
                            <div class="japanese-char" style="font-size: 28px; font-weight: bold; color: #2c3e50;">${charData.char}</div>
                            <div class="romanji" style="font-size: 11px; color: #7f8c8d; margin-top: 4px;">${charData.romanji}</div>
                        </div>
                    `;
                } else {
                    cell.innerHTML = '<div class="char-display empty-cell" style="opacity: 0.3;"></div>';
                }

                tableRow.appendChild(cell);
            }

            container.appendChild(tableRow);
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
        
        console.log('Writing stats updated:', writingStats);
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

    console.log('🎌 Japanese Learning App initialized successfully!');
});