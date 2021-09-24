const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    fixed: true,
    audio: [
        {
            name: 'Lemon',
            artist: 'Akie',
            url: 'http://music.163.com/song/media/outer/url?id=543681750.mp3',
            cover: 'https://i.loli.net/2020/05/16/WblwEoPCfJ6c2dI.jpg',
        },
        {
            name: '打上花火',
            artist: '米津玄師',
            url: 'http://music.163.com/song/media/outer/url?id=496869422.mp3',
            cover: 'https://i.loli.net/2020/05/16/riNKZ3XkYsfA7Ha.jpg',
        },s
        {
            name: 'Departures〜あなたにおくるアイの歌〜',
            artist: 'EGOIST',
            url: 'http://music.163.com/song/media/outer/url?id=722928.mp3',
            cover: 'https://i.loli.net/2020/05/16/PKeCWpvGIlNSwE4.jpg',
        },
        {
            name: 'secret base ~君がくれたもの~ ',
            artist: '茅野愛衣 / 戸松遥 / 早見沙織',
            url: 'http://music.163.com/song/media/outer/url?id=33911781.mp3',
            cover: 'https://i.loli.net/2020/05/17/e16GF4H27OBpiU8.jpg',
        },
        {
            name: 'ブルーバード (青鸟）',
            artist: 'いきものがかり',
            url: 'http://music.163.com/song/media/outer/url?id=718765.mp3',
            cover: 'https://i.loli.net/2020/05/16/zSfxc3t9N8TklYy.jpg',
        },
        {
            name: '你的名字插曲--黄昏之时',
            artist: 'Ericlan',
            url: 'http://music.163.com/song/media/outer/url?id=527223995.mp3',
            cover: 'https://i.loli.net/2020/05/16/LR7eyp3Wrsq1G6O.jpg',
        },
        {
            name: '夏目友人帳のテーマ时',
            artist: '吉森信',
            url: 'http://music.163.com/song/media/outer/url?id=541928.mp3',
            cover: 'https://i.loli.net/2020/05/16/sJkgqMO6hPj4m5p.jpg',
        }
    ]
});