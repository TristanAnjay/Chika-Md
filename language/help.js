/*
› Create By @Tristan
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`Selamat ${salam} kak ${pushname}

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _Selamat ${salam} kak ${pushname}_

*⏰ Time Server : ${time}*
*📚 List Menu : ${botname}*

╭─────「 _*Group Menu*_ 」─────
│
├ ${prefix}linkgroup
├ ${prefix}ephemeral [option]
├ ${prefix}setppgc
├ ${prefix}setname
├ ${prefix}setdesc
├ ${prefix}group [option]
├ ${prefix}editinfo [option]
├ ${prefix}add @user
├ ${prefix}kick @user
├ ${prefix}hidetag
├ ${prefix}tagall
├ ${prefix}antilink [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}promote @user
├ ${prefix}demote @user
├ ${prefix}vote
├ ${prefix}devote
├ ${prefix}upvote
├ ${prefix}cekvote
├ ${prefix}hapusvote
│
╰──────────────────────

╭────「 _*Downloader Menu*_ 」────
│
├ ${prefix}tiktokown
├ ${prefix}tiktokwm
├ ${prefix}tiktokmp3
├ ${prefix}instagram
├ ${prefix}twitter
├ ${prefix}twittermp3
├ ${prefix}facebook
├ ${prefix}pinterestdl
├ ${prefix}ytmp3
├ ${prefix}ytmp4
├ ${prefix}getmusic
├ ${prefix}getvideo
├ ${prefix}umma
├ ${prefix}joox
├ ${prefix}soundcloud
│
╰───────────────────────

╭────「 _*Search Menu*_ 」────
│
├ ${prefix}play
├ ${prefix}yts
├ ${prefix}google
├ ${prefix}gimage
├ ${prefix}pinterest
├ ${prefix}wikimedia
├ ${prefix}ytsearch
├ ${prefix}ringtone
├ ${prefix}stalk [option]
├ ${prefix}webtoons
├ ${prefix}drakor
├ ${prefix}animesearch
├ ${prefix}character
├ ${prefix}manga
├ ${prefix}playstore
├ ${prefix}gsmarena
├ ${prefix}jadwalbioskop
├ ${prefix}nowplayingbioskop
├ ${prefix}aminio
├ ${prefix}wattpad
├ ${prefix}webtoons
├ ${prefix}drakor
│
╰───────────────────────

╭────「 _*Tele Stick Menu*_ 」────
│
├ ${prefix}gurastick
├ ${prefix}dogestick
├ ${prefix}bucinstick
├ ${prefix}patrick
│
╰───────────────────────

╭────「 _*Random Menu*_ 」────
│
├ ${prefix}coffe
├ ${prefix}quotesanime
├ ${prefix}couple
├ ${prefix}darkjokes
│
╰───────────────────────

╭───「 _*Random Anime Menu*_ 」───
│
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}waifus
├ ${prefix}megumin
├ ${prefix}nekos
├ ${prefix}blowjob
├ ${prefix}husbu
├ ${prefix}anime
├ ${prefix}shinobu
├ ${prefix}cuddle
├ ${prefix}lick
├ ${prefix}kiss
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}cry
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}hug
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
├ ${prefix}cringe
├ ${prefix}awoo
├ ${prefix}nom
├ ${prefix}pat
├ ${prefix}bully
├ ${prefix}trap
├ ${prefix}yeet
│
╰────────────────────────

╭─────「 _*Text Pro Menu*_ 」──────
│
├ ${prefix}3dchristmas
├ ${prefix}3ddeepsea
├ ${prefix}americanflag
├ ${prefix}3dscifi
├ ${prefix}3drainbow
├ ${prefix}3dwaterpipe
├ ${prefix}halloweenskeleton
├ ${prefix}sketch
├ ${prefix}bluecircuit
├ ${prefix}space
├ ${prefix}metallic
├ ${prefix}fiction
├ ${prefix}greenhoror
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dcrackedstone
├ ${prefix}3dneonlight
├ ${prefix}impressiveglitch
├ ${prefix}naturalleaves
├ ${prefix}fireworksparkle
├ ${prefix}matrix
├ ${prefix}dropwater
├ ${prefix}harrypotter
├ ${prefix}foggywindow
├ ${prefix}neondevils
├ ${prefix}christmashholidat
├ ${prefix}3dgradient
├ ${prefix}blackpink
├ ${prefix}gluetext
│
╰────────────────────────

╭───「 _*Photo Oxy Menu*_ 」───
│
├ ${prefix}shadow
├ ${prefix}romantic
├ ${prefix}smoke
├ ${prefix}burnpapper
├ ${prefix}naruto
├ ${prefix}lovemsg
├ ${prefix}grassmsg
├ ${prefix}lovetext
├ ${prefix}coffecup
├ ${prefix}butterfly
├ ${prefix}harrypotter
├ ${prefix}retrolol
│
╰────────────────────────

╭─────「 _*Ephoto Menu*_ 」──────
│
├ ${prefix}ffcover
├ ${prefix}crossfire
├ ${prefix}galaxy
├ ${prefix}glass
├ ${prefix}neon
├ ${prefix}beach
├ ${prefix}blackpink
├ ${prefix}igcertificate
├ ${prefix}ytcertificate
│
╰────────────────────────

╭───「 _*Game & Fun Menu*_ 」───
│
├ ${prefix}simih
├ ${prefix}bagaimanakah
├ ${prefix}kapankah
├ ${prefix}apakah
├ ${prefix}bisakah
├ ${prefix}rate
├ ${prefix}wangy
├ ${prefix}gantengcek
├ ${prefix}cekganteng
├ ${prefix}cantikcek
├ ${prefix}cekcantik
├ ${prefix}sangecek
├ ${prefix}ceksange
├ ${prefix}gaycek
├ ${prefix}cekgay
├ ${prefix}lesbicek
├ ${prefix}halah
├ ${prefix}hilih
├ ${prefix}huluh
├ ${prefix}heleh
├ ${prefix}holoh
├ ${prefix}jadian
├ ${prefix}jodohku
├ ${prefix}tictactoe [@tag]
├ ${prefix}delttt
├ ${prefix}family100
├ ${prefix}tebak [option]
├ ${prefix}math [mode]
├ ${prefix}suitpvp [tag]
│
╰────────────────────────

╭─────「 _*Primbon Menu*_ 」──────
│
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak
├ ${prefix}shio
│
╰────────────────────────

╭─────「 _*Cerpen Menu*_ 」──────
│
├ ${prefix}cerpen anak
├ ${prefix}cerpen bahasa daerah
├ ${prefix}cerpen bahasa inggris
├ ${prefix}cerpen bahasa jawa
├ ${prefix}cerpen bahasa sunda
├ ${prefix}cerpen budaya
├ ${prefix}cerpen cinta
├ ${prefix}cerpen cinta islami
├ ${prefix}cerpen cinta pertama
├ ${prefix}cerpen cinta romantis
├ ${prefix}cerpen cinta sedih
├ ${prefix}cerpen cinta segitiga
├ ${prefix}cerpen cinta sejati
├ ${prefix}cerpen galau
├ ${prefix}cerpen gokil
├ ${prefix}cerpen inspiratif
├ ${prefix}cerpen jepang
├ ${prefix}cerpen kehidupan
├ ${prefix}cerpen keluarga
├ ${prefix}cerpen kisah nyata
├ ${prefix}cerpen korea
├ ${prefix}cerpen kristen
├ ${prefix}cerpen liburan
├ ${prefix}cerpen lingkungan
├ ${prefix}cerpen lucu
├ ${prefix}cerpen malaysia
├ ${prefix}cerpen mengharukan
├ ${prefix}cerpen misteri
├ ${prefix}cerpen motivasi
├ ${prefix}cerpen nasihat
├ ${prefix}cerpen nasionalisme
├ ${prefix}cerpen olahraga
├ ${prefix}cerpen patah hati
├ ${prefix}cerpen penantian
├ ${prefix}cerpen pendidikan
├ ${prefix}cerpen pengalaman pribadi
├ ${prefix}cerpen pengorbanan
├ ${prefix}cerpen penyesalan
├ ${prefix}cerpen perjuangan
├ ${prefix}cerpen perpisahan
├ ${prefix}cerpen persahabatan
├ ${prefix}cerpen petualangan
├ ${prefix}cerpen ramadhan
├ ${prefix}cerpen remaja
├ ${prefix}cerpen renungan
├ ${prefix}cerpen rindu
├ ${prefix}cerpen rohani
├ ${prefix}cerpen romantis
├ ${prefix}cerpen sastra
├ ${prefix}cerpen sedih
├ ${prefix}cerpen sejarah
├ ${prefix}cerpen slice of life
├ ${prefix}cerpen terjemahan
├ ${prefix}cerpen thriller
│
╰────────────────────────

╭─────「 _*Convert Menu*_ 」──────
│
├ ${prefix}toimage
├ ${prefix}removebg
├ ${prefix}sticker
├ ${prefix}emojimix
├ ${prefix}tovideo
├ ${prefix}togif
├ ${prefix}tourl
├ ${prefix}tovn
├ ${prefix}tomp3
├ ${prefix}toaudio
├ ${prefix}ebinary
├ ${prefix}dbinary
├ ${prefix}styletext
├ ${prefix}smeme
│
╰────────────────────────

╭───「 _*Information Menu*_ 」───
│
├ ${prefix}merdeka-news
├ ${prefix}kontan-news
├ ${prefix}cnbc-news
├ ${prefix}tribun-news
├ ${prefix}indozone-news
├ ${prefix}kompas-news
├ ${prefix}detik-news
├ ${prefix}daily-news
├ ${prefix}inews-news
├ ${prefix}okezone-news
├ ${prefix}sindo-news
├ ${prefix}tempo-news
├ ${prefix}antara-news
├ ${prefix}cnn-news
├ ${prefix}fajar-news
│
╰────────────────────────

╭─────「 _*Main Menu*_ 」──────
│
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}speed
├ ${prefix}owner
├ ${prefix}menu
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}listonline
│
╰────────────────────────

╭─────「 _*Database Menu*_ 」──────
│
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
│
╰────────────────────────

╭───「 _*Anonymous Menu*_ 」───
│
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
│
╰────────────────────────

╭─────「 _*Islamic Menu*_ 」──────
│
├ ${prefix}iqra
├ ${prefix}hadist
├ ${prefix}alquran
├ ${prefix}juzamma
├ ${prefix}tafsirsurah
│
╰────────────────────────

╭───「 _*Voice Changer Menu*_ 」───
│
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}tupai
│
╰────────────────────────

╭─────「 _*Owner Menu*_ 」──────
│
├ ${prefix}react [emoji]
├ ${prefix}chat [option]
├ ${prefix}join [link]
├ ${prefix}leave
├ ${prefix}block @user
├ ${prefix}unblock @user
├ ${prefix}bcgroup
├ ${prefix}bcall
├ ${prefix}setppbot
├ ${prefix}setexif
├ ${prefix}setmenu
├ ${prefix}setallmenu
│
╰────────────────────────

╭─────「 _*Thank To*_ 」──────
│
├ Tristan
├ DikaArdnt
├ Zeeone Ofc
├ FatihArridho
├ Yoga
├ Riy
├ Deff
├ Sanzy
├ Nekel
├ Bagas Prdn
│
╰─────────────────────
  `
}

//—————「 Welcome 」—————//
exports.welcome = () => {
	return`Welcome
`
}

//—————「 Leave 」—————//
exports.leave = () => {
	return`Byeee
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *DONATE* 」—————

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍

Thanks!

—————「 *SEWA | RUN BOT* 」—————

  *_SEWA BOT_* 
  *≻* Sewa Bot 15k (1 minggu)
  *≻* Sewa Bot 20k (1 bulan)
  *≻* Sewa Bot 25k (Permanen)

  *JADI BOT* 
  *≻* Jadi Bot 15k Tidak Owner (1 minggu)
  *≻* Jadi Bot + Owner 20k (1 bulan)
  *≻* Jadi Bot + Owner 25k (Permanen)

  *JASA RUN BOT*
  *≻* Run Bot 15k (1 minggu)
  *≻* Run Bot 20k (1 bulan)
  *≻* Run Bot 25k (Permanen)

  *Minat? Langsung chat aja ya cuy 🐦*

  *Contact person Owner* :
  wa.me/${ownernomer}
`
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
╭───「 _*Group Menu*_ 」───
│
├ ${prefix}linkgroup
├ ${prefix}ephemeral [option]
├ ${prefix}setppgc
├ ${prefix}setname
├ ${prefix}setdesc
├ ${prefix}group [option]
├ ${prefix}editinfo [option]
├ ${prefix}add @user
├ ${prefix}kick @user
├ ${prefix}hidetag
├ ${prefix}tagall
├ ${prefix}antilink [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}promote @user
├ ${prefix}demote @user
├ ${prefix}vote
├ ${prefix}devote
├ ${prefix}upvote
├ ${prefix}cekvote
├ ${prefix}hapusvote
│
╰────────────────────────
  `
}

exports.downloadermenu = (prefix) => {
	return`
╭────「 _*Downloader Menu*_ 」────
│
├ ${prefix}tiktokown
├ ${prefix}tiktokwm
├ ${prefix}tiktokmp3
├ ${prefix}instagram
├ ${prefix}twitter
├ ${prefix}twittermp3
├ ${prefix}facebook
├ ${prefix}pinterestdl
├ ${prefix}ytmp3
├ ${prefix}ytmp4
├ ${prefix}getmusic
├ ${prefix}getvideo
├ ${prefix}umma
├ ${prefix}joox
├ ${prefix}soundcloud
│
╰─────────────────────────
  `
}

exports.searchmenu = (prefix) => {
	return`
╭────「 _*Search Menu*_ 」────
│
├ ${prefix}play
├ ${prefix}yts
├ ${prefix}google
├ ${prefix}gimage
├ ${prefix}pinterest
├ ${prefix}wikimedia
├ ${prefix}ytsearch
├ ${prefix}ringtone
├ ${prefix}stalk [option]
├ ${prefix}webtoons
├ ${prefix}drakor
├ ${prefix}animesearch
├ ${prefix}character
├ ${prefix}manga
├ ${prefix}playstore
├ ${prefix}gsmarena
├ ${prefix}jadwalbioskop
├ ${prefix}nowplayingbioskop
├ ${prefix}aminio
├ ${prefix}wattpad
├ ${prefix}webtoons
├ ${prefix}drakor
│
╰────────────────────────
  `
}

exports.telestickmenu = (prefix) => {
	return`
╭────「 _*Tele Stick Menu*_ 」────
│
├ ${prefix}gurastick
├ ${prefix}dogestick
├ ${prefix}bucinstick
├ ${prefix}patrick
│
╰────────────────────────
`
}

exports.randommenu = (prefix) => {
	return`
╭────「 _*Random Menu*_ 」────
│
├ ${prefix}coffe
├ ${prefix}quotesanime
├ ${prefix}couple
├ ${prefix}darkjokes
│
╰────────────────────────
  `
}

exports.randomanimemenu = (prefix) => {
	return`
╭───「 _*Random Anime Menu*_ 」───
│
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}waifus
├ ${prefix}megumin
├ ${prefix}nekos
├ ${prefix}blowjob
├ ${prefix}husbu
├ ${prefix}anime
├ ${prefix}shinobu
├ ${prefix}cuddle
├ ${prefix}lick
├ ${prefix}kiss
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}cry
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}hug
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
├ ${prefix}cringe
├ ${prefix}awoo
├ ${prefix}nom
├ ${prefix}pat
├ ${prefix}bully
├ ${prefix}trap
├ ${prefix}yeet
│
╰─────────────────────────
  `
}

exports.textpromenu = (prefix) => {
	return`
╭─────「 _*Text Pro Menu*_ 」──────
│
├ ${prefix}3dchristmas
├ ${prefix}3ddeepsea
├ ${prefix}americanflag
├ ${prefix}3dscifi
├ ${prefix}3drainbow
├ ${prefix}3dwaterpipe
├ ${prefix}halloweenskeleton
├ ${prefix}sketch
├ ${prefix}bluecircuit
├ ${prefix}space
├ ${prefix}metallic
├ ${prefix}fiction
├ ${prefix}greenhoror
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dcrackedstone
├ ${prefix}3dneonlight
├ ${prefix}impressiveglitch
├ ${prefix}naturalleaves
├ ${prefix}fireworksparkle
├ ${prefix}matrix
├ ${prefix}dropwater
├ ${prefix}harrypotter
├ ${prefix}foggywindow
├ ${prefix}neondevils
├ ${prefix}christmashholidat
├ ${prefix}3dgradient
├ ${prefix}blackpink
├ ${prefix}gluetext
│
╰────────────────────────
  `
}

exports.photooxymenu = (prefix) => {
	return`
╭───「 _*Photo Oxy Menu*_ 」───
│
├ ${prefix}shadow
├ ${prefix}romantic
├ ${prefix}smoke
├ ${prefix}burnpapper
├ ${prefix}naruto
├ ${prefix}lovemsg
├ ${prefix}grassmsg
├ ${prefix}lovetext
├ ${prefix}coffecup
├ ${prefix}butterfly
├ ${prefix}harrypotter
├ ${prefix}retrolol
│
╰────────────────────────
  `
}

exports.ephotomenu = (prefix) => {
	return`
╭─────「 _*Ephoto Menu*_ 」──────
│
├ ${prefix}ffcover
├ ${prefix}crossfire
├ ${prefix}galaxy
├ ${prefix}glass
├ ${prefix}neon
├ ${prefix}beach
├ ${prefix}blackpink
├ ${prefix}igcertificate
├ ${prefix}ytcertificate
│
╰────────────────────────
  `
}

exports.funmenu = (prefix) => {
	return`
╭───「 _*Game & Fun Menu*_ 」───
│
├ ${prefix}simih
├ ${prefix}bagaimanakah
├ ${prefix}kapankah
├ ${prefix}apakah
├ ${prefix}bisakah
├ ${prefix}rate
├ ${prefix}wangy
├ ${prefix}gantengcek
├ ${prefix}cekganteng
├ ${prefix}cantikcek
├ ${prefix}cekcantik
├ ${prefix}sangecek
├ ${prefix}ceksange
├ ${prefix}gaycek
├ ${prefix}cekgay
├ ${prefix}lesbicek
├ ${prefix}halah
├ ${prefix}hilih
├ ${prefix}huluh
├ ${prefix}heleh
├ ${prefix}holoh
├ ${prefix}jadian
├ ${prefix}jodohku
├ ${prefix}tictactoe [@tag]
├ ${prefix}delttt
├ ${prefix}family100
├ ${prefix}tebak [option]
├ ${prefix}math [mode]
├ ${prefix}suitpvp [tag]
│
╰────────────────────────
  `
}

exports.primbonmenu = (prefix) => {
	return`
╭─────「 _*Primbon Menu*_ 」──────
│
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak
├ ${prefix}shio
│
╰─────────────────────────
  `
}

exports.cerpenmenu = (prefix) => {
	return`
╭─────「 _*Cerpen Menu*_ 」──────
│
├ ${prefix}cerpen anak
├ ${prefix}cerpen bahasa daerah
├ ${prefix}cerpen bahasa inggris
├ ${prefix}cerpen bahasa jawa
├ ${prefix}cerpen bahasa sunda
├ ${prefix}cerpen budaya
├ ${prefix}cerpen cinta
├ ${prefix}cerpen cinta islami
├ ${prefix}cerpen cinta pertama
├ ${prefix}cerpen cinta romantis
├ ${prefix}cerpen cinta sedih
├ ${prefix}cerpen cinta segitiga
├ ${prefix}cerpen cinta sejati
├ ${prefix}cerpen galau
├ ${prefix}cerpen gokil
├ ${prefix}cerpen inspiratif
├ ${prefix}cerpen jepang
├ ${prefix}cerpen kehidupan
├ ${prefix}cerpen keluarga
├ ${prefix}cerpen kisah nyata
├ ${prefix}cerpen korea
├ ${prefix}cerpen kristen
├ ${prefix}cerpen liburan
├ ${prefix}cerpen lingkungan
├ ${prefix}cerpen lucu
├ ${prefix}cerpen malaysia
├ ${prefix}cerpen mengharukan
├ ${prefix}cerpen misteri
├ ${prefix}cerpen motivasi
├ ${prefix}cerpen nasihat
├ ${prefix}cerpen nasionalisme
├ ${prefix}cerpen olahraga
├ ${prefix}cerpen patah hati
├ ${prefix}cerpen penantian
├ ${prefix}cerpen pendidikan
├ ${prefix}cerpen pengalaman pribadi
├ ${prefix}cerpen pengorbanan
├ ${prefix}cerpen penyesalan
├ ${prefix}cerpen perjuangan
├ ${prefix}cerpen perpisahan
├ ${prefix}cerpen persahabatan
├ ${prefix}cerpen petualangan
├ ${prefix}cerpen ramadhan
├ ${prefix}cerpen remaja
├ ${prefix}cerpen renungan
├ ${prefix}cerpen rindu
├ ${prefix}cerpen rohani
├ ${prefix}cerpen romantis
├ ${prefix}cerpen sastra
├ ${prefix}cerpen sedih
├ ${prefix}cerpen sejarah
├ ${prefix}cerpen slice of life
├ ${prefix}cerpen terjemahan
├ ${prefix}cerpen thriller
│
╰─────────────────────────
`
}

exports.convertmenu = (prefix) => {
	return`
╭─────「 _*Convert Menu*_ 」──────
│
├ ${prefix}toimage
├ ${prefix}removebg
├ ${prefix}sticker
├ ${prefix}emojimix
├ ${prefix}tovideo
├ ${prefix}togif
├ ${prefix}tourl
├ ${prefix}tovn
├ ${prefix}tomp3
├ ${prefix}toaudio
├ ${prefix}ebinary
├ ${prefix}dbinary
├ ${prefix}styletext
├ ${prefix}smeme
│
╰─────────────────────────
  `
}

exports.informationmenu = (prefix) => {
	return`
╭───「 _*Information Menu*_ 」───
│
├ ${prefix}merdeka-news
├ ${prefix}kontan-news
├ ${prefix}cnbc-news
├ ${prefix}tribun-news
├ ${prefix}indozone-news
├ ${prefix}kompas-news
├ ${prefix}detik-news
├ ${prefix}daily-news
├ ${prefix}inews-news
├ ${prefix}okezone-news
├ ${prefix}sindo-news
├ ${prefix}tempo-news
├ ${prefix}antara-news
├ ${prefix}cnn-news
├ ${prefix}fajar-news
│
╰─────────────────────────
`
}

exports.mainmenu = (prefix) => {
	return`
╭─────「 _*Main Menu*_ 」──────
│
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}speed
├ ${prefix}owner
├ ${prefix}menu
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}listonline
│
╰────────────────────────
  `
}

exports.databasemenu = (prefix) => {
	return`
╭─────「 _*Database Menu*_ 」──────
│
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
│
╰────────────────────────
`
}

exports.anonymousmenu = (prefix) => {
	return`
╭───「 _*Anonymous Menu*_ 」───
│
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
│
╰────────────────────────
  `
}

exports.islamicmenu = (prefix) => {
	return`
╭─────「 _*Islamic Menu*_ 」──────
│
├ ${prefix}iqra
├ ${prefix}hadist
├ ${prefix}alquran
├ ${prefix}juzamma
├ ${prefix}tafsirsurah
│
╰──────────────────────────
  `
}

exports.voicechargermenu = (prefix) => {
	return`
╭────「 _*Voice Changer Menu*_ 」───
│
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}tupai
│
╰────────────────────────
  `
}

exports.ownermenu = (prefix) => {
	return`
╭─────「 _*Owner Menu*_ 」──────
│
├ ${prefix}react [emoji]
├ ${prefix}chat [option]
├ ${prefix}join [link]
├ ${prefix}leave
├ ${prefix}block @user
├ ${prefix}unblock @user
├ ${prefix}bcgroup
├ ${prefix}bcall
├ ${prefix}setppbot
├ ${prefix}setexif
├ ${prefix}setmenu
├ ${prefix}setallmenu
│
╰────────────────────────
  `
}

//tqto gsh di hps y :) kalau mai tmbhin aja nama kalian!
exports.thanksto = () => {
	return`
╭─────「 _*Thank To*_ 」──────
│
├ Tristan
├ DikaArdnt
├ Zeeone Ofc
├ FatihArridho
├ Yoga
├ Riy
├ Deff
├ Sanzy
├ Nekel
├ Bagas Prdn
│
╰─────────────────────
`
}