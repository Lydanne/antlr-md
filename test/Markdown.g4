grammar Markdown;

markdown: block* EOF;

block: header | blockLine;

header: HEADER headerText+ NL;

headerText: (headerFlag | inlineCode | text)+;

headerFlag: (HASH | WS)+;

blockLine: NL;

blockText: text NL;

text: TEXT;

inlineCode: BACKTICK TEXT BACKTICK;

HEADER: HASH+ WS;

BACKTICK: '`';

TEXT: ~[# \r\n`]+;

WS: [ \t];

NL: '\r'? '\n' | '\r';

HASH: '#';
