grammar Markdown;

markdown: (block | blankLine)* EOF;

block: header | unorderedList | orderedList | textLine;

header: headerFlag inlineText NL;

headerFlag: HASH_WS;

unorderedList: STAR WS? inlineText NL;

orderedList: DIGITS DOT WS? inlineText NL;

textLine: inlineText NL;

inlineText: (BOLD_TEXT | ITALIC_TEXT | INLINE_CODE | TEXT)*;

BOLD_TEXT: (
		DOUBLE_ASTERISK ~('\r' | '\n' | '*')+ DOUBLE_ASTERISK
	)
	| (DOUBLE_UNDERSCORE ~('\r' | '\n' | '_')+ DOUBLE_UNDERSCORE);

ITALIC_TEXT: (ASTERISK ~('\r' | '\n' | '*')+ ASTERISK)
	| (UNDERSCORE ~('\r' | '\n' | '_')+ UNDERSCORE);

INLINE_CODE: BACKTICK ~('\r' | '\n' | '`')+ BACKTICK;

CODE_BLOCK: (TRIPLE_BACKTICK .*? TRIPLE_BACKTICK) -> mode(DEFAULT_MODE);

TEXT: ~[#`_*\r\n]+;

HASH: '#';

HASH_WS: HASH+ WS;

STAR: '*';

DIGITS: [0-9]+;

DOT: '.';

WS: [ \t];

UNDERSCORE: '_';

BACKTICK: '`';

ASTERISK: '\\*';

DOUBLE_ASTERISK: '**';

DOUBLE_UNDERSCORE: '__';

TRIPLE_BACKTICK: '```';

NL: '\r'? '\n';

blankLine: NL;