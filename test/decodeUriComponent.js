tests([
    ['test', 'test'],
    ['%25', '%'],
    ['%%25%', '%%%'],
    ['%%C2%B5%', '%µ%'],
    ['%E0%A4%A', '\xE0\xA4%A']
]);