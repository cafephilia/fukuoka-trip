// 위키미디어 커먼즈 사진. 960px 썸네일을 public/photos에 저장했고, 원본과 라이선스는 source 링크에서 확인할 수 있다
import type { Photo } from '../types'

const base = import.meta.env.BASE_URL + 'photos/'

export const PHOTOS = {
  airport: { src: base + 'airport.jpg', author: 'SuFlyer', license: 'CC0', licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', source: 'https://commons.wikimedia.org/wiki/File:Fukuoka_Airport_New_Control_Tower_and_New_Runway_Construction_(2024_Feb).jpg' },
  hakata: { src: base + 'hakata.jpg', author: 'ぱちょぴ', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0', source: 'https://commons.wikimedia.org/wiki/File:JR_Hakata_City_2011_Jan.jpg' },
  kushida: { src: base + 'kushida.jpg', author: 'そらみみ', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:Torii_and_Romon_Gate_of_Kushida_Shrine_2.jpg' },
  canal: { src: base + 'canal.jpg', author: 'そらみみ', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:Canal_City_Hakata_at_night_20170929.jpg' },
  nakasu: { src: base + 'nakasu.jpg', author: 'Nesnad', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0', source: 'https://commons.wikimedia.org/wiki/File:Hakata_yatai_and_yatai_food_-_2024_Sept_24_various.jpeg' },
  dazaifu: { src: base + 'dazaifu.jpg', author: 'Jakub Hałun', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:20100719_Dazaifu_Tenmangu_Shrine_3328.jpg', example: '2010년 사진이에요. 본전은 보수 공사 중이라 지금은 임시 본전에서 참배해요' },
  yanagawa: { src: base + 'yanagawa.jpg', author: 'Asturio Cantabrio', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:Yanagawa_cruise_ac_(3).jpg' },
  mojiko: { src: base + 'mojiko.jpg', author: 'Suicasmo', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:Former_Moji_Customs_20221023.jpg' },
  karato: { src: base + 'karato.jpg', author: '663highland', license: 'CC BY 2.5', licenseUrl: 'https://creativecommons.org/licenses/by/2.5', source: 'https://commons.wikimedia.org/wiki/File:141122_Karato_Fish_Market_Shimonoseki_Yamaguchi_pref_Japan01s3.jpg' },
  kanmon: { src: base + 'kanmon.jpg', author: 'Cheng-en Cheng', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0', source: 'https://commons.wikimedia.org/wiki/File:2014-09-01_Kanmon_Pedestrian_Tunnel.jpg' },
  ohori: { src: base + 'ohori.jpg', author: 'そらみみ', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:Ohori_Park_20170505-1.jpg' },
} satisfies Record<string, Photo>

// 맛집 탭 사진. 키는 foodspots.json의 id
export const SPOT_PHOTOS: Record<string, Photo> = {
  'issou-hakata': { src: base + 'ramen.jpg', author: 'そらみみ', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:Hakata_Ippudo_Ramen_20180622.jpg', example: '잇소가 아닌 다른 가게(잇푸도)의 돈코츠 라멘 사진이에요' },
  'ooyama-honten': { src: base + 'motsunabe.jpg', author: 'pelican from Tokyo, Japan', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0', source: 'https://commons.wikimedia.org/wiki/File:Fukuoka-style_hot_pot_(3637375629).jpg', example: '오오야마가 아닌 다른 가게의 모츠나베 사진이에요' },
  'kawataro-nakasu': { src: base + 'ika.jpg', author: 'Miya.m', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0', source: 'https://commons.wikimedia.org/wiki/File:Ika-sashi_01.JPG', example: '가와타로가 아닌 다른 곳의 오징어 활어회 사진이에요' },
  'hountei-nakasu': { src: base + 'gyoza.jpg', author: 'veroyama from Meguro, Japan', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0', source: 'https://commons.wikimedia.org/wiki/File:%E6%97%AD%E8%BB%92%E3%81%AE%E9%A4%83%E5%AD%90_(3791695730).jpg', example: '호운테이가 아닌 다른 가게(아사히켄)의 한입 교자 사진이에요' },
  'daifuku-udon-1bangai': { src: base + 'udon.jpg', author: 'Nissy-KITAQ', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0', source: 'https://commons.wikimedia.org/wiki/File:Maki_no_Udon_Goboten.JPG', example: '다이후쿠 우동이 아닌 다른 가게(마키노 우동)의 우엉튀김 우동 사진이에요' },
  'ganso-mentaiju': { src: base + 'mentaiko.jpg', author: 'Nissy-KITAQ', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0', source: 'https://commons.wikimedia.org/wiki/File:Fukuya_mentaiko_Fukkoku.JPG', example: '멘타이주가 아닌 다른 회사(후쿠야)의 명란젓 사진이에요' },
  'kasanoya': { src: base + 'umegae.jpg', author: 'KCyamazaki', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:%E6%A2%85%E3%83%B6%E6%9E%9D%E9%A4%85%E3%81%A8%E6%8A%B9%E8%8C%B6.JPG', example: '어느 가게의 우메가에모치인지는 알 수 없어요' },
  'motoyoshiya-honten': { src: base + 'seiromushi.jpg', author: 'Sakaori', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', source: 'https://commons.wikimedia.org/wiki/File:Yanagawa_eel_steamed_in_a_basket.JPG', example: '야나가와의 세이로무시 사진이지만 모토요시야인지는 알 수 없어요' },
  'karato-bakangai': { src: base + 'karato.jpg', author: '663highland', license: 'CC BY 2.5', licenseUrl: 'https://creativecommons.org/licenses/by/2.5', source: 'https://commons.wikimedia.org/wiki/File:141122_Karato_Fish_Market_Shimonoseki_Yamaguchi_pref_Japan01s3.jpg' },
  'bear-fruits': { src: base + 'yakicurry.jpg', author: 'Hiroshi Ishii', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0', source: 'https://commons.wikimedia.org/wiki/File:%E9%96%80%E5%8F%B8%E6%B8%AF%E5%90%8D%E7%89%A9%E7%84%BC%E3%81%8D%E3%82%AB%E3%83%AC%E3%83%BC_(8325667208).jpg', example: '모지코 야키카레 사진이지만 베어 프루츠인지는 알 수 없어요' },
  'yatai-tsukasa': { src: base + 'nakasu.jpg', author: 'Nesnad', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0', source: 'https://commons.wikimedia.org/wiki/File:Hakata_yatai_and_yatai_food_-_2024_Sept_24_various.jpeg', example: '츠카사가 있는 나카스 세이류 공원의 야타이 거리 사진이에요' },
}
