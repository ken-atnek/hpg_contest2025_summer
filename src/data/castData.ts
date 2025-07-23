/* =======================================
 * キャストマスターデータ
 * URL:ssrc/data/castData.ts
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */
export type CastItem = {
  castId: string;
  name: string;
  shop: string;
  area: string;
  url: string | { pc: string; sp: string };
  image: string;
  size?: string;
};

export const castData = [
  /* === [ 横浜エリア ] ================= */
  {
    castId: 'yh_dandy_seri',
    storeId: 'yh_dandy',
    name: '青山瀬里',
    url: {
      pc: 'https://www.dandy-g.jp/dandy/detail.php?g_id=7133',
      sp: 'https://www.dandy-g.jp/sp/dandy/g_info_sp.php?g_id=7133',
    },
    image: '/images/cast/yh_dandy_seri.webp',
  },
  {
    castId: 'yh_dandy_niko',
    storeId: 'yh_dandy',
    name: '鈴音 にこ',
    url: {
      pc: 'https://www.dandy-g.jp/dandy/detail.php?g_id=7024',
      sp: 'https://www.dandy-g.jp/sp/dandy/g_info_sp.php?g_id=7024',
    },
    image: '/images/cast/yh_dandy_niko.webp',
  },
  {
    castId: 'yh_dandy_hinano',
    storeId: 'yh_dandy',
    name: '姫柊 ひなの',
    url: {
      pc: 'https://www.dandy-g.jp/dandy/detail.php?g_id=7207',
      sp: 'https://www.dandy-g.jp/sp/dandy/g_info_sp.php?g_id=7207',
    },
    image: '/images/cast/yh_dandy_hinano.webp',
  },
  {
    castId: 'yh_mr_nina',
    storeId: 'yh_mr',
    name: '山下 にな',
    url: {
      pc: 'https://www.dandy-g.jp/mr_dandy/detail.php?g_id=7168',
      sp: 'https://www.dandy-g.jp/sp/mr_dandy/g_info_sp.php?g_id=7168',
    },
    image: '/images/cast/yh_mr_nina.webp',
  },
  {
    castId: 'yh_mr_rin',
    storeId: 'yh_mr',
    name: '織音 りん',
    url: {
      pc: 'https://www.dandy-g.jp/mr_dandy/detail.php?g_id=6519',
      sp: 'https://www.dandy-g.jp/sp/mr_dandy/g_info_sp.php?g_id=6519',
    },
    image: '/images/cast/yh_mr_rin.webp',
  },
  {
    castId: 'yh_club_honon',
    storeId: 'yh_club',
    name: '大空ほのん',
    url: {
      pc: 'https://www.dandy-g.jp/club_dandy/detail.php?g_id=6891',
      sp: 'https://www.dandy-g.jp/sp/club_dandy/g_info_sp.php?g_id=6891',
    },
    image: '/images/cast/yh_club_honon.webp',
  },

  /* === [ 京都エリア ] ================= */
  {
    castId: 'kt_hot_himeno',
    storeId: 'kt_hot',
    name: '唐沢ひめの',
    url: 'https://www.hot-point.co.jp/hot/girls_info.php?g_id=5504',
    image: '/images/cast/kt_hot_himeno.webp',
  },
  {
    castId: 'kt_hot_orina',
    storeId: 'kt_hot',
    name: '南 おりな',
    url: 'https://www.hot-point.co.jp/hot/girls_info.php?g_id=6737',
    image: '/images/cast/kt_hot_orina.webp',
  },
  {
    castId: 'kt_part2_mai',
    storeId: 'kt_part2',
    name: '木南 まい',
    url: 'https://www.hot-point.co.jp/hot2/girls_info.php?g_id=7208',
    image: '/images/cast/kt_part2_mai.webp',
  },
  {
    castId: 'kt_part2_sakura',
    storeId: 'kt_part2',
    name: 'はるなさくら',
    url: 'https://www.hot-point.co.jp/hot2/girls_info.php?g_id=5760',
    image: '/images/cast/kt_part2_sakura.webp',
  },
  {
    castId: 'kt_part2_rika',
    storeId: 'kt_part2',
    name: '加藤 りか',
    url: 'https://www.hot-point.co.jp/hot2/girls_info.php?g_id=7650',
    image: '/images/cast/kt_part2_rika.webp',
  },
  {
    castId: 'kt_lip_momoka',
    storeId: 'kt_lip',
    name: '槙村ももか',
    url: 'https://www.hot-point.co.jp/lip/girls_info.php?g_id=3958&ls=glist',
    image: '/images/cast/kt_lip_momoka.webp',
  },
  {
    castId: 'kt_lip_aina',
    storeId: 'kt_lip',
    name: '飯田あいな',
    url: 'https://www.hot-point.co.jp/lip/girls_info.php?g_id=7452',
    image: '/images/cast/kt_lip_aina.webp',
  },
  {
    castId: 'kt_villa_rei',
    storeId: 'kt_villa',
    name: '神崎 レイ',
    url: 'https://www.hot-point.co.jp/villa/girls_info.php?g_id=4128',
    image: '/images/cast/kt_villa_rei.webp',
  },

  /* === [ 神戸エリア ] ================= */
  {
    castId: 'kb_hot_kazuha',
    storeId: 'kb_hot',
    name: '有村 かずは',
    url: 'https://www.hpg-kobe.jp/hot/model_profile759.html',
    image: '/images/cast/kb_hot_kazuha.webp',
  },
  /* === [ 福岡エリア ] ================= */
  {
    castId: 'fu_hot_arisu',
    storeId: 'fu_hot',
    name: '星乃アリス',
    url: 'https://www.fukuoka-hotpoint.jp/hot/g-info.php?g_id=6664',
    image: '/images/cast/fu_hot_arisu.webp',
  },
  {
    castId: 'fu_villa_kana',
    storeId: 'fu_villa',
    name: '宝生 かな',
    url: 'https://www.fukuoka-hotpoint.jp/villa/g-info.php?g_id=4368&ls=glist',
    image: '/images/cast/fu_villa_kana.webp',
    size: 'Age.35 / T.158 / B.84 [D] / W.56 / H.85',
  },
  {
    castId: 'fu_villa_ren',
    storeId: 'fu_villa',
    name: '平子 れん',
    url: 'https://www.fukuoka-hotpoint.jp/villa/g-info.php?g_id=6371&ls=glist',
    image: '/images/cast/fu_villa_ren.webp',
  },
  {
    castId: 'fu_villa_hikaru',
    storeId: 'fu_villa',
    name: '水野ひかる',
    url: 'https://www.fukuoka-hotpoint.jp/villa/g-info.php?g_id=5896',
    image: '/images/cast/fu_villa_hikaru.webp',
  },
  /* === [ 熊本エリア ] ================= */
  {
    castId: 'km_hot_ran',
    storeId: 'km_hot',
    name: '春野 蘭',
    url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=181',
    image: '/images/cast/km_hot_ran.webp',
  },
  {
    castId: 'km_hot_sara',
    storeId: 'km_hot',
    name: 'サラ',
    url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=173',
    image: '/images/cast/km_hot_sara.webp',
  },
  {
    castId: 'km_hot_mio',
    storeId: 'km_hot',
    name: '星川★美桜',
    url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=467',
    image: '/images/cast/km_hot_mio.webp',
  },
  {
    castId: 'km_hot_yua',
    storeId: 'km_hot',
    name: '藤咲ゆあ',
    url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=465',
    image: '/images/cast/km_hot_yua.webp',
  },
  {
    castId: 'km_hot_anri',
    storeId: 'km_hot',
    name: '神埼あんり',
    url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=176',
    image: '/images/cast/km_hot_anri.webp',
  },
  {
    castId: 'km_hot_erena',
    storeId: 'km_hot',
    name: '逢坂えれな',
    url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=466',
    image: '/images/cast/km_hot_erena.webp',
  },
  {
    castId: 'km_hot_saya',
    storeId: 'km_hot',
    name: '坂下 さや',
    url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=171',
    image: '/images/cast/km_hot_saya.webp',
  },

  {
    castId: 'km_villa_sena',
    storeId: 'km_villa',
    name: '藤田 せな',
    url: 'https://www.hotpoint-villa.cc/detail.php?g_id=52',
    image: '/images/cast/km_villa_sena.webp',
  },

  {
    castId: 'km_villa_kurena',
    storeId: 'km_villa',
    name: '神代くれな',
    url: 'https://www.hotpoint-villa.cc/detail.php?g_id=546',
    image: '/images/cast/km_villa_kurena.webp',
  },
  {
    castId: 'km_villa_riho',
    storeId: 'km_villa',
    name: 'りほ',
    url: 'https://www.hotpoint-villa.cc/detail.php?g_id=522',
    image: '/images/cast/km_villa_riho.webp',
  },
  {
    castId: 'km_villa_hana',
    storeId: 'km_villa',
    name: '白咲 はな',
    url: 'https://www.hotpoint-villa.cc/detail.php?g_id=6',
    image: '/images/cast/km_villa_hana.webp',
  },
];
