grammar Markdown;

markdown: block* EOF?;

block: inlineHeader | inlineText | blockCode | NL;

inlineHeader: header textContent NL?;

header: HEADER;

inlineText: textContent NL?;

textContent: (inlineCode | str)+;

blockCode: BLOCK_CODE NL?;

str: CHAR+;

inlineCode: INLINE_CODE;

HEADER: HASH+ WS;

CHAR: ~[\r\n];

INLINE_CODE: BACKTICK ~[\r\n`]+ BACKTICK;

BLOCK_CODE: '```' ~[`]+ '```';

NL: '\r'? '\n';

fragment BACKTICK: '`';

fragment WS: [ \t];

fragment HASH: '#';