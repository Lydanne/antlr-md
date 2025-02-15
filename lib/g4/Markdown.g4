grammar Markdown;

markdown: block* EOF?;

block: inlineHeader | inlineText | blockCode | NL;

inlineHeader: NL? HEADER textContent;

inlineText: NL? textContent;

textContent: (inlineCode | text)+;

blockCode: NL? BLOCK_CODE;

text: CHAR+;

inlineCode: INLINE_CODE;

HEADER: HASH+ WS;

CHAR: ~[\r\n];

INLINE_CODE: BACKTICK ~[\r\n`]+ BACKTICK;

BLOCK_CODE:
	BLOCK_CODE_FLAG CODE_LANG? NL .*? NL? BLOCK_CODE_FLAG;

NL: '\r'? '\n';

fragment CODE_LANG: ~[\t\r\n`]+;

fragment BLOCK_CODE_FLAG: '```';

fragment BACKTICK: '`';

fragment WS: [ \t];

fragment HASH: '#';