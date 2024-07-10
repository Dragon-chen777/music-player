// 歌曲列表在这里维护，文件放在 db/music 和 db/img
const musicList = [
  {
    title: '打上花火',
    link: 'db/music/打上花火.mp3',
    cover: 'db/img/打上花火.jpg'
  },
  {
    title: 'Mojito',
    link: 'db/music/Mojito.mp3',
    cover: 'db/img/Mojito.jpg'
  },
  {
    title: 'Super_Star',
    link: 'db/music/Super_Star.mp3',
    cover: 'db/img/Super_Star.jpg'
  },
  {
    title: '离人',
    link: 'db/music/离人.mp3',
    cover: 'db/img/离人.jpg'
  },
]
let curIndex = 0

export default function handler(req, res) {
  const params = JSON.parse(req.body)
  if (params.cmd === 'pre') {
    curIndex--
    if (curIndex < 0) curIndex = musicList.length - 1
  }
  else if (params.cmd === 'next') {
    curIndex = ++curIndex % (musicList.length - 1)
  }

  res.status(200).json(musicList[curIndex]);
}
