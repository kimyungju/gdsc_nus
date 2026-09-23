// AY26/27 roster: member names and roles reconciled from the workbook to the slide labels.
// Local photos are optimized copies of the profile images shown beside each name in the deck.
export type Member = {
  name: string;
  role: string;
  img?: string;
  linkedIn?: string;
  github?: string;
};

export const excoMembers: Member[] = [
  {
    "name": "Sean Sukamto",
    "role": "Lead",
    "img": "/team/ay26-27/sean-sukamto-1.jpg",
    "linkedIn": "https://www.linkedin.com/in/sean-sukamto-a866682a2/"
  },
  {
    "name": "Seokjoon Hong",
    "role": "Internal Lead",
    "img": "/team/ay26-27/seokjoon-hong-2.jpg",
    "linkedIn": "https://www.linkedin.com/in/seok-joon-hong/"
  },
  {
    "name": "Kang Min Gu",
    "role": "Internal Lead",
    "img": "/team/ay26-27/kang-min-gu-2.jpg",
    "linkedIn": "https://www.linkedin.com/in/min-gu-kang-17096834a/"
  },
  {
    "name": "Gabrielle Gianna Tan-Winings",
    "role": "External Lead (Product)",
    "img": "/team/ay26-27/gabrielle-gianna-tan-winings-3.jpg",
    "linkedIn": "https://www.linkedin.com/in/gabriellegtw/"
  },
  {
    "name": "Charly Chandra",
    "role": "External Lead (Tech)",
    "img": "/team/ay26-27/charly-chandra-3.jpg",
    "linkedIn": "https://www.linkedin.com/in/charly-chandra/"
  }
];

export const internalTeams = {
  "Branding + Marketing": [
    {
      "name": "Nihirra Kakkar",
      "role": "B&M Lead",
      "img": "/team/ay26-27/nihirra-kakkar-36.jpg",
      "linkedIn": "https://www.linkedin.com/in/nihirra-kakkar/"
    },
    {
      "name": "Tan Si Ning Charlene",
      "role": "B&M Associate",
      "img": "/team/ay26-27/tan-si-ning-charlene-36.jpg",
      "linkedIn": "www.linkedin.com/in/tansiningcharlene"
    },
    {
      "name": "Yap Xin Yi",
      "role": "B&M Associate",
      "img": "/team/ay26-27/yap-xin-yi-36.jpg",
      "linkedIn": "https://www.linkedin.com/in/yapxinyi1/"
    },
    {
      "name": "Koh Yun Xuan Dylea",
      "role": "B&M Associate",
      "img": "/team/ay26-27/koh-yun-xuan-dylea-36.jpg",
      "linkedIn": "www.linkedin.com/in/dylea-koh-51379425b"
    }
  ],
  "Technology": [
    {
      "name": "Kim Yungju",
      "role": "Tech Lead",
      "img": "/team/ay26-27/kim-yungju-37.jpg",
      "linkedIn": "https://www.linkedin.com/in/yungju/"
    },
    {
      "name": "Glory Charity Lion",
      "role": "Tech Lead",
      "img": "/team/ay26-27/glory-charity-lion-37.jpg",
      "linkedIn": "https://www.linkedin.com/in/glory-charity-lion/"
    },
    {
      "name": "Chua Kai Jie, Emerson",
      "role": "Tech Associate",
      "img": "/team/ay26-27/chua-kai-jie-emerson-37.jpg",
      "linkedIn": "https://www.linkedin.com/in/emerson-chua-kai-jie-a757a1242/"
    },
    {
      "name": "Jiwoon Ha",
      "role": "Tech Associate",
      "img": "/team/ay26-27/jiwoon-ha-37.jpg",
      "linkedIn": "https://www.linkedin.com/in/hajiwoon/"
    },
    {
      "name": "Swati Rajesh",
      "role": "Tech Associate",
      "img": "/team/ay26-27/swati-rajesh-37.jpg",
      "linkedIn": "https://www.linkedin.com/in/swati-rajesh-817502284/"
    },
    {
      "name": "Richard Prabowo",
      "role": "Tech Associate",
      "img": "/team/ay26-27/richard-prabowo-37.jpg",
      "linkedIn": "https://www.linkedin.com/in/richard-prab/"
    },
    {
      "name": "Zhang Kaiwen",
      "role": "Tech Associate",
      "img": "/team/ay26-27/zhang-kaiwen-37.jpg"
    },
    {
      "name": "Lee Junwon",
      "role": "Tech Associate",
      "img": "/team/ay26-27/lee-junwon-37.jpg"
    }
  ],
  "Partnerships": [
    {
      "name": "Anton Ang Jia Jun",
      "role": "Partnerships Head",
      "img": "/team/ay26-27/anton-ang-jia-jun-38.jpg",
      "linkedIn": "https://www.linkedin.com/in/anton-ang/"
    },
    {
      "name": "Jihoon Han",
      "role": "Partnerships Head",
      "img": "/team/ay26-27/jihoon-han-38.jpg",
      "linkedIn": "https://www.linkedin.com/in/jihoonhan1217"
    },
    {
      "name": "Chuah Jia Wern Audrey",
      "role": "Partnership Associate",
      "img": "/team/ay26-27/chuah-jia-wern-audrey-38.jpg",
      "linkedIn": "https://www.linkedin.com/in/audrey-cjw"
    },
    {
      "name": "Tay Hestia Kairos",
      "role": "Partnerships Associate",
      "img": "/team/ay26-27/tay-hestia-kairos-38.jpg",
      "linkedIn": "https://www.linkedin.com/in/kairostay"
    },
    {
      "name": "Sihyun (Sean) Park",
      "role": "Partnerships Associate",
      "img": "/team/ay26-27/sihyun-sean-park-38.jpg",
      "linkedIn": "https://www.linkedin.com/in/sihyun-park-4a386036b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ759Nd5IRayXIOsp%2FlOYKA%3D%3D"
    }
  ],
  "Operations": [
    {
      "name": "Naomi Phoenix Choa",
      "role": "Ops Lead",
      "img": "/team/ay26-27/naomi-phoenix-choa-39.jpg",
      "linkedIn": "https://www.linkedin.com/in/naomichoa/"
    },
    {
      "name": "Leong Jia Xin",
      "role": "Ops Associate",
      "img": "/team/ay26-27/leong-jia-xin-39.jpg",
      "linkedIn": "https://www.linkedin.com/in/leong-jiaxin"
    },
    {
      "name": "Natasha Sebastian Haryanto",
      "role": "Ops Associate",
      "img": "/team/ay26-27/natasha-sebastian-haryanto-39.jpg",
      "linkedIn": "https://www.linkedin.com/in/natasha-sebastian-haryanto"
    },
    {
      "name": "Joonchul Moon",
      "role": "Ops Associate",
      "img": "/team/ay26-27/joonchul-moon-39.jpg",
      "linkedIn": "https://www.linkedin.com/in/joonchulmoon/"
    },
    {
      "name": "Amber Yeo En",
      "role": "Ops Associate",
      "img": "/team/ay26-27/amber-yeo-en-39.jpg",
      "linkedIn": "https://www.linkedin.com/in/amberyeo"
    }
  ],
  "Treasurer": [
    {
      "name": "Kek Yu Min",
      "role": "Treasurer",
      "img": "/team/ay26-27/kek-yu-min-40.jpg",
      "linkedIn": "www.linkedin.com/in/kekyumin"
    }
  ]
} satisfies Record<string, Member[]>;

export const externalTeams = {
  "Edible Garden City": [
    {
      "name": "Chloe Wang Zhiyu",
      "role": "Design Head",
      "img": "/team/ay26-27/chloe-wang-zhiyu-4.jpg",
      "linkedIn": "https://www.linkedin.com/in/chloe-wang-zhiyu"
    },
    {
      "name": "Danny Chan",
      "role": "Design Associate",
      "img": "/team/ay26-27/danny-chan-4.jpg",
      "linkedIn": "https://www.linkedin.com/in/danny-chan-yu-tian/"
    },
    {
      "name": "Whang Zhi Yun",
      "role": "Design Associate",
      // The workbook repeats Margaret's URL on this row; omit it to avoid misdirecting visitors.
    },
    {
      "name": "Li Xueyi Joanne",
      "role": "Design Associate",
      "img": "/team/ay26-27/li-xueyi-joanne-4.jpg",
      "linkedIn": "https://www.linkedin.com/in/joanne-li-2k4/"
    },
    {
      "name": "Feliciano Margaret Elisha Fontanilla",
      "role": "Design Associate",
      "img": "/team/ay26-27/feliciano-margaret-elisha-fontanilla-4.jpg",
      "linkedIn": "https://www.linkedin.com/in/margaret-feliciano-a6001b235/"
    },
    {
      "name": "Loo Yan Ting",
      "role": "Head of Product",
      "img": "/team/ay26-27/loo-yan-ting-5.jpg",
      "linkedIn": "www.linkedin.com/in/looyanting"
    },
    {
      "name": "Liew Yie Hann",
      "role": "Product Associate",
      "img": "/team/ay26-27/liew-yie-hann-5.jpg",
      "linkedIn": "https://www.linkedin.com/in/yie-hann"
    },
    {
      "name": "Ng Chen Meng",
      "role": "Product Associate",
      "img": "/team/ay26-27/ng-chen-meng-5.jpg",
      "linkedIn": "https://www.linkedin.com/in/ng-chen-meng-100abc/"
    },
    {
      "name": "Gabriel Wan Jia Ping",
      "role": "Product Associate",
      "img": "/team/ay26-27/gabriel-wan-jia-ping-5.jpg",
      "linkedIn": "https://www.linkedin.com/in/gabrielwanjp"
    },
    {
      "name": "Seojin Park",
      "role": "Product Associate",
      "img": "/team/ay26-27/seojin-park-5.jpg",
      "linkedIn": "https://www.linkedin.com/in/seojin-park-"
    },
    {
      "name": "Neo Kia Hao",
      "role": "Product Associate",
      "img": "/team/ay26-27/neo-kia-hao-5.jpg",
      "linkedIn": "https://www.linkedin.com/in/neokiahao"
    },
    {
      "name": "Hon Lok Yan",
      "role": "Product Associate",
      "img": "/team/ay26-27/hon-lok-yan-5.jpg",
      "linkedIn": "https://www.linkedin.com/in/hon-lok-yan-680160287"
    },
    {
      "name": "Tham Qianyi Rei",
      "role": "Product Associate",
      "img": "/team/ay26-27/tham-qianyi-rei-5.jpg",
      "linkedIn": "https://www.linkedin.com/in/rei-tham/"
    },
    {
      "name": "Srivathsan Ram",
      "role": "Tech Lead",
      "img": "/team/ay26-27/srivathsan-ram-6.jpg",
      "linkedIn": "https://www.linkedin.com/in/srivathsan-ram"
    },
    {
      "name": "Danven Ong",
      "role": "Tech Associate",
      "img": "/team/ay26-27/danven-ong-6.jpg",
      "linkedIn": "https://www.linkedin.com/in/danven-ong/"
    },
    {
      "name": "John Ferrancol",
      "role": "Tech Associate",
      "img": "/team/ay26-27/john-ferrancol-6.jpg",
      "linkedIn": "https://www.linkedin.com/in/john-gabriel-gamboa-ferrancol/"
    },
    {
      "name": "Brandon Tan",
      "role": "Tech Associate",
      "img": "/team/ay26-27/brandon-tan-6.jpg",
      "linkedIn": "https://www.linkedin.com/in/brandon-tan03/"
    },
    {
      "name": "Jovian Sanjaya Putra",
      "role": "Tech Associate",
      "img": "/team/ay26-27/jovian-sanjaya-putra-6.jpg",
      "linkedIn": "https://www.linkedin.com/in/joviansp/"
    },
    {
      "name": "Kanit (Jay) Bhudisanont",
      "role": "Tech Associate",
      "img": "/team/ay26-27/kanit-jay-bhudisanont-6.jpg",
      "linkedIn": "https://www.linkedin.com/in/jay-b-b08683276"
    },
    {
      "name": "Ong Kai Sen Vincent",
      "role": "Tech Associate",
      "img": "/team/ay26-27/ong-kai-sen-vincent-6.jpg",
      "linkedIn": "www.linkedin.com/in/vincentoks"
    },
    {
      "name": "Muhammad Izzat Bin Mohamed Rafiq",
      "role": "Tech Associate",
      "img": "/team/ay26-27/muhammad-izzat-bin-mohamed-rafiq-6.jpg",
      "linkedIn": "www.linkedin.com/in/muhammad-izzat-bin-mohamed-rafiq"
    }
  ],
  "Children's Society": [
    {
      "name": "Chen Yee Chin",
      "role": "Head of Product",
      "img": "/team/ay26-27/chen-yee-chin-7.jpg",
      "linkedIn": "www.linkedin.com/in/yee-chin-chen-68bb6337a"
    },
    {
      "name": "Ho Xin Yi Naomi",
      "role": "Product Associate",
      "img": "/team/ay26-27/ho-xin-yi-naomi-7.jpg",
      "linkedIn": "https://www.linkedin.com/in/naomihoxinyi/"
    },
    {
      "name": "Chan Wye Jeng Jadon",
      "role": "Product Associate",
      "img": "/team/ay26-27/chan-wye-jeng-jadon-7.jpg",
      "linkedIn": "https://www.linkedin.com/in/jadonchanwj/"
    },
    {
      "name": "Kuek Qiao Jun Charlotte",
      "role": "Product Associate",
      "img": "/team/ay26-27/kuek-qiao-jun-charlotte-8.jpg",
      "linkedIn": "https://www.linkedin.com/in/charlottekuek/"
    },
    {
      "name": "Darius Wong Zheng Kai",
      "role": "Product Associate",
      "img": "/team/ay26-27/darius-wong-zheng-kai-8.jpg",
      "linkedIn": "https://linkedin.com/in/darius-wong-zheng-kai"
    },
    {
      "name": "Choo Yan Ming Norman",
      "role": "Product Associate",
      "img": "/team/ay26-27/choo-yan-ming-norman-8.jpg",
      "linkedIn": "https://www.linkedin.com/in/norman-choo-4b3892335/"
    },
    {
      "name": "Esther Loh Xin Qi",
      "role": "Product Associate",
      "img": "/team/ay26-27/esther-loh-xin-qi-9.jpg",
      "linkedIn": "https://www.linkedin.com/in/esther-loh-3a597135a/"
    },
    {
      "name": "Ravi Harikkrishna",
      "role": "Product Associate",
      "img": "/team/ay26-27/ravi-harikkrishna-9.jpg",
      "linkedIn": "www.linkedin.com/in/ravi-harikkrishna-177502374"
    },
    {
      "name": "Nicha Ing See",
      "role": "Tech Lead",
      "img": "/team/ay26-27/nicha-ing-see-10.jpg",
      "linkedIn": "https://www.linkedin.com/in/nichaingsee/"
    },
    {
      "name": "Tan Yu Bin Tevyn",
      "role": "Tech Associate",
      "img": "/team/ay26-27/tan-yu-bin-tevyn-10.jpg",
      "linkedIn": "https://www.linkedin.com/in/tevyntan/"
    },
    {
      "name": "Ang Rui Wen Ray",
      "role": "Tech Associate",
      "img": "/team/ay26-27/ang-rui-wen-ray-10.jpg",
      "linkedIn": "https://www.linkedin.com/in/ray-ang-4822a5243"
    },
    {
      "name": "Naresh Nehru",
      "role": "Tech Associate",
      "img": "/team/ay26-27/naresh-nehru-11.jpg",
      "linkedIn": "https://www.linkedin.com/in/naresh-nehru-ab6a881b4/"
    },
    {
      "name": "Alfred Chew Zheng Rong",
      "role": "Tech Associate",
      "img": "/team/ay26-27/alfred-chew-zheng-rong-11.jpg",
      "linkedIn": "https://www.linkedin.com/in/alfred-chew-23292a267/"
    },
    {
      "name": "Jovan Ong",
      "role": "Tech Associate",
      "img": "/team/ay26-27/jovan-ong-11.jpg"
    },
    {
      "name": "Nandar Phyo Khaing",
      "role": "Tech Associate",
      "img": "/team/ay26-27/nandar-phyo-khaing-12.jpg",
      "linkedIn": "https://www.linkedin.com/in/nandar-phyo-khaing/"
    },
    {
      "name": "Mariyya Binte Abdul Rashid",
      "role": "Design Head",
      "img": "/team/ay26-27/mariyya-binte-abdul-rashid-13.jpg",
      "linkedIn": "https://www.linkedin.com/in/mariyya-rashid-7a5a80356/"
    },
    {
      "name": "Han Jia Xuan",
      "role": "Design Associate",
      "img": "/team/ay26-27/han-jia-xuan-13.jpg"
    },
    {
      "name": "Timothy Luk Wan Teng",
      "role": "Design Associate",
      "img": "/team/ay26-27/timothy-luk-wan-teng-13.jpg",
      "linkedIn": "linkedin.com/in/timothylukwt?originalSubdomain=sg"
    },
    {
      "name": "Leong Zi Shuen",
      "role": "Design Associate",
      "img": "/team/ay26-27/leong-zi-shuen-13.jpg",
      "linkedIn": "https://www.linkedin.com/in/zi-shuen-leong/"
    },
    {
      "name": "Cheong Weng Kei",
      "role": "Design Associate",
      "img": "/team/ay26-27/cheong-weng-kei-13.jpg",
      "linkedIn": "https://www.linkedin.com/in/wengkei-cheong/"
    }
  ],
  "Caring for Life": [
    {
      "name": "Kenneth Christopher Hendra",
      "role": "Head of Tech",
      "img": "/team/ay26-27/kenneth-christopher-hendra-14.jpg",
      "linkedIn": "https://www.linkedin.com/in/kenneth-hendra/"
    },
    {
      "name": "Justin Stevenson Theodorus",
      "role": "Tech Associate",
      "img": "/team/ay26-27/justin-stevenson-theodorus-14.jpg",
      "linkedIn": "https://www.linkedin.com/in/justin-theodorus"
    },
    {
      "name": "Ian Abiel Wangsa",
      "role": "Tech Associate",
      "img": "/team/ay26-27/ian-abiel-wangsa-14.jpg",
      "linkedIn": "https://www.linkedin.com/in/ian-abiel-wangsa-70625a290/"
    },
    {
      "name": "Brytania Valerie",
      "role": "Tech Associate",
      "img": "/team/ay26-27/brytania-valerie-15.jpg",
      "linkedIn": "https://www.linkedin.com/in/brytania-valerie/"
    },
    {
      "name": "Priscilla Ashley Wijaya",
      "role": "Tech Associate",
      "img": "/team/ay26-27/priscilla-ashley-wijaya-15.jpg",
      "linkedIn": "https://www.linkedin.com/in/priscillaashleyw"
    },
    {
      "name": "William Edward Sugiharto",
      "role": "Tech Associate",
      "img": "/team/ay26-27/william-edward-sugiharto-15.jpg",
      "linkedIn": "https://www.linkedin.com/in/william-sugiharto-33079b284"
    },
    {
      "name": "Andrew Raynard Liharja",
      "role": "Tech Associate",
      "img": "/team/ay26-27/andrew-raynard-liharja-16.jpg",
      "linkedIn": "www.linkedin.com/in/andrewraynard"
    },
    {
      "name": "Natalia Elyssa Chan",
      "role": "Tech Associate",
      "img": "/team/ay26-27/natalia-elyssa-chan-16.jpg",
      "linkedIn": "https://www.linkedin.com/in/natalia-elyssa-chan"
    }
  ],
  "Mental ACT": [
    {
      "name": "Benedict Aurelius Tjia",
      "role": "Tech Lead",
      "img": "/team/ay26-27/benedict-aurelius-tjia-17.jpg",
      "linkedIn": "https://www.linkedin.com/in/benedict-aurelius-tjia-58162b348/"
    },
    {
      "name": "Chai Pin Zheng",
      "role": "Tech Associate",
      "img": "/team/ay26-27/chai-pin-zheng-17.jpg",
      "linkedIn": "https://www.linkedin.com/in/chai-pin-zheng"
    },
    {
      "name": "Pavan Madhu",
      "role": "Tech Associate",
      "img": "/team/ay26-27/pavan-madhu-17.jpg",
      "linkedIn": "https://www.linkedin.com/in/pavan-madhu/"
    },
    {
      "name": "Valentino Nathan",
      "role": "Tech Associate",
      "img": "/team/ay26-27/valentino-nathan-18.jpg",
      "linkedIn": "https://www.linkedin.com/in/valentino-nathan-442bb536b/"
    },
    {
      "name": "Wesley Tay",
      "role": "Tech Associate",
      "img": "/team/ay26-27/wesley-tay-18.jpg",
      "linkedIn": "https://www.linkedin.com/in/wesley-tay/"
    },
    {
      "name": "Carvalho Andreus Roby",
      "role": "Tech Associate",
      "img": "/team/ay26-27/carvalho-andreus-roby-18.jpg"
    },
    {
      "name": "Zhuo Zhuzhen",
      "role": "Tech Associate",
      "img": "/team/ay26-27/zhuo-zhuzhen-19.jpg",
      "linkedIn": "https://www.linkedin.com/in/zhuo-zhuzhen/"
    },
    {
      "name": "Chong Jie Xin",
      "role": "Head of Product",
      "img": "/team/ay26-27/chong-jie-xin-20.jpg",
      "linkedIn": "https://www.linkedin.com/in/chongjiexin/"
    },
    {
      "name": "Charis Tan Shu Ying",
      "role": "Product Associate",
      "img": "/team/ay26-27/charis-tan-shu-ying-20.jpg",
      "linkedIn": "www.linkedin.com/in/charis-tan-9231a6244"
    },
    {
      "name": "Kaira Tan Yan Xin",
      "role": "Product Associate",
      "img": "/team/ay26-27/kaira-tan-yan-xin-20.jpg",
      "linkedIn": "https://www.linkedin.com/in/kaira-tan/"
    },
    {
      "name": "Kyla Frances Yew",
      "role": "Product Associate",
      "img": "/team/ay26-27/kyla-frances-yew-21.jpg",
      "linkedIn": "https://www.linkedin.com/in/kyla-yew/"
    },
    {
      "name": "Malcom Tan Yon Kiak",
      "role": "Product Associate",
      "img": "/team/ay26-27/malcom-tan-yon-kiak-21.jpg",
      "linkedIn": "www.linkedin.com/in/malcomtyk"
    },
    {
      "name": "Richard Prabowo",
      "role": "Product Associate",
      "img": "/team/ay26-27/richard-prabowo-21.jpg",
      "linkedIn": "https://www.linkedin.com/in/richard-prab/"
    },
    {
      "name": "Tan Ying Xiu",
      "role": "Product Associate",
      "img": "/team/ay26-27/tan-ying-xiu-21.jpg",
      "linkedIn": "https://www.linkedin.com/in/tan-ying-xiu/"
    },
    {
      "name": "Prasanna Thiruvickram",
      "role": "Design Head",
      "img": "/team/ay26-27/prasanna-thiruvickram-34.jpg",
      "linkedIn": "https://www.linkedin.com/in/thiruvickramprasanna"
    },
    {
      "name": "Theodore Ong Sheng Yuan",
      "role": "Design Associate",
      "linkedIn": "https://www.linkedin.com/in/theodoreongsy/"
    },
    {
      "name": "Yong Anna",
      "role": "Design Associate",
      "img": "/team/ay26-27/yong-anna-34.jpg",
      "linkedIn": "https://www.linkedin.com/in/annayong20/"
    },
    {
      "name": "Shresta Suresh",
      "role": "Design Associate"
    },
    {
      "name": "Yang Yichen",
      "role": "Design Associate"
    }
  ],
  "Siloam Xperience": [
    {
      "name": "Wong Li Song",
      "role": "Product Associate",
      "img": "/team/ay26-27/wong-li-song-22.jpg",
      "linkedIn": "https://www.linkedin.com/in/lisongwong/"
    },
    {
      "name": "Laura Punsu",
      "role": "Head of Product",
      "img": "/team/ay26-27/laura-punsu-22.jpg",
      "linkedIn": "https://www.linkedin.com/in/laurapunsu/"
    },
    {
      "name": "Danial-Zanefy Bin Azman",
      "role": "Product Associate",
      "img": "/team/ay26-27/danial-zanefy-bin-azman-22.jpg",
      "linkedIn": "https://www.linkedin.com/in/danial-zanefy/"
    },
    {
      "name": "Linus Cheng Ming Hong",
      "role": "Product Associate",
      "img": "/team/ay26-27/linus-cheng-ming-hong-22.jpg",
      "linkedIn": "https://www.linkedin.com/in/linus-cheng-ming-hong/"
    },
    {
      "name": "Lee Zhao Rui",
      "role": "Product Associate",
      "img": "/team/ay26-27/lee-zhao-rui-23.jpg",
      "linkedIn": "https://www.linkedin.com/in/oilyfishball"
    },
    {
      "name": "Amanda Tasya Dedi",
      "role": "Product Associate",
      "img": "/team/ay26-27/amanda-tasya-dedi-23.jpg",
      "linkedIn": "https://www.linkedin.com/in/amndatasyaa/"
    },
    {
      "name": "Ng Tze Han, Benedict",
      "role": "Product Associate",
      "img": "/team/ay26-27/ng-tze-han-benedict-23.jpg",
      "linkedIn": "www.linkedin.com/in/benedict-n-22745613a"
    },
    {
      "name": "Rohan Varatharajan",
      "role": "Tech Lead",
      "img": "/team/ay26-27/rohan-varatharajan-24.jpg",
      "linkedIn": "https://www.linkedin.com/in/rohan-varatharajan/"
    },
    {
      "name": "Hayoung Lee",
      "role": "Tech Associate",
      "img": "/team/ay26-27/hayoung-lee-24.jpg",
      "linkedIn": "https://www.linkedin.com/in/0218hy/"
    },
    {
      "name": "Waseem Akram",
      "role": "Tech Associate",
      "img": "/team/ay26-27/waseem-akram-24.jpg",
      "linkedIn": "https://www.linkedin.com/in/waseem-akram-342108208/"
    },
    {
      "name": "De Xun",
      "role": "Tech Associate",
      "img": "/team/ay26-27/de-xun-25.jpg",
      "linkedIn": "https://www.linkedin.com/in/dexun19/"
    },
    {
      "name": "Da Feng",
      "role": "Tech Associate",
      "img": "/team/ay26-27/da-feng-25.jpg",
      "linkedIn": "https://www.linkedin.com/in/da-feng-tan-644568368/"
    },
    {
      "name": "Asher Goh",
      "role": "Tech Associate",
      "img": "/team/ay26-27/asher-goh-25.jpg",
      "linkedIn": "https://www.linkedin.com/in/goh-jin-yuan"
    },
    {
      "name": "Pang Yi Jie",
      "role": "Tech Associate",
      "img": "/team/ay26-27/pang-yi-jie-26.jpg",
      "linkedIn": "www.linkedin.com/in/yi-jie-pang"
    },
    {
      "name": "Astella Yip",
      "role": "Tech Associate",
      "img": "/team/ay26-27/astella-yip-26.jpg",
      "linkedIn": "https://www.linkedin.com/in/astella-yip-19ba2a23a"
    }
  ],
  "ItsRainingRaincoats": [
    {
      "name": "Kai Kameyama",
      "role": "Tech Lead",
      "img": "/team/ay26-27/kai-kameyama-27.jpg",
      "linkedIn": "https://linkedin.com/in/kaikameyama"
    },
    {
      "name": "Nguyen Truong Manh Quan",
      "role": "Tech Associate",
      "img": "/team/ay26-27/nguyen-truong-manh-quan-27.jpg",
      "linkedIn": "https://www.linkedin.com/in/nguyen-truong-manh-quan/"
    },
    {
      "name": "Yu Sutong",
      "role": "Tech Associate",
      "img": "/team/ay26-27/yu-sutong-27.jpg",
      "linkedIn": "www.linkedin.com/in/sutongyu"
    },
    {
      "name": "Leung Han Xi",
      "role": "Tech Associate",
      "img": "/team/ay26-27/leung-han-xi-27.jpg",
      "linkedIn": "https://www.linkedin.com/in/leung-han-xi-ba844b1a8/"
    },
    {
      "name": "Tan Yu Hoe",
      "role": "Tech Associate",
      "img": "/team/ay26-27/tan-yu-hoe-28.jpg",
      "linkedIn": "https://www.linkedin.com/in/yu-hoe-tan/"
    },
    {
      "name": "Li Junyu",
      "role": "Tech Associate",
      "img": "/team/ay26-27/li-junyu-28.jpg",
      "linkedIn": "www.linkedin.com/in/jimmy-li-junyu"
    },
    {
      "name": "Lo Yong Zhe",
      "role": "Tech Associate",
      "img": "/team/ay26-27/lo-yong-zhe-28.jpg",
      "linkedIn": "https://www.linkedin.com/in/lo-yong-zhe/"
    },
    {
      "name": "Clarence Choo Jia Yi",
      "role": "Tech Associate",
      "img": "/team/ay26-27/clarence-choo-jia-yi-28.jpg",
      "linkedIn": "https://www.linkedin.com/in/clarence-choo/"
    }
  ],
  "ACRES": [
    {
      "name": "Brendan Lim",
      "role": "Tech Associate",
      "img": "/team/ay26-27/brendan-lim-31.jpg",
      "linkedIn": "https://www.linkedin.com/in/brendan-lim-73409539a/"
    },
    {
      "name": "Matthias Chan",
      "role": "Tech Lead",
      "img": "/team/ay26-27/matthias-chan-31.jpg",
      "linkedIn": "https://www.linkedin.com/in/matthias-chanjk/"
    },
    {
      "name": "Sean Tan",
      "role": "Tech Associate",
      "img": "/team/ay26-27/sean-tan-31.jpg",
      "linkedIn": "https://www.linkedin.com/in/sean-nathaniel-tan-932ab6325"
    },
    {
      "name": "Daniel Betts",
      "role": "Tech Associate",
      "img": "/team/ay26-27/daniel-betts-31.jpg",
      "linkedIn": "www.linkedin.com/in/daniel-betts-a19627328"
    },
    {
      "name": "Vera Tay",
      "role": "Head of Product",
      "img": "/team/ay26-27/vera-tay-32.jpg",
      "linkedIn": "https://www.linkedin.com/in/vveratay/"
    },
    {
      "name": "Kalent Chia",
      "role": "Product Associate",
      "img": "/team/ay26-27/kalent-chia-32.jpg",
      "linkedIn": "https://www.linkedin.com/in/kalent-chia-218861214/"
    },
    {
      "name": "Lim En Xi",
      "role": "Product Associate",
      "img": "/team/ay26-27/lim-en-xi-32.jpg",
      "linkedIn": "https://www.linkedin.com/in/limenxi7/"
    },
    {
      "name": "Mark Tuazon",
      "role": "Product Associate",
      "img": "/team/ay26-27/mark-tuazon-32.jpg",
      "linkedIn": "https://linkedin.com/in/markalfonsotuazon"
    },
    {
      "name": "Siya Maheshwari",
      "role": "Product Associate",
      "img": "/team/ay26-27/siya-maheshwari-32.jpg",
      "linkedIn": "https://www.linkedin.com/in/siya-maheshwari-a45bb8357/"
    },
    {
      "name": "Victor Oo",
      "role": "Product Associate",
      "img": "/team/ay26-27/victor-oo-33.jpg",
      "linkedIn": "https://www.linkedin.com/in/victoroo/"
    },
    {
      "name": "Sonia Lee",
      "role": "Product Associate",
      "img": "/team/ay26-27/sonia-lee-33.jpg",
      "linkedIn": "https://www.linkedin.com/in/sonia-lee"
    },
    {
      "name": "Yaj Tetambe",
      "role": "Product Associate",
      "img": "/team/ay26-27/yaj-tetambe-33.jpg",
      "linkedIn": "https://www.linkedin.com/in/yaj-tetambe"
    },
    {
      "name": "Wong Wei Feng",
      "role": "Product Associate",
      "img": "/team/ay26-27/wong-wei-feng-33.jpg",
      "linkedIn": "https://www.linkedin.com/in/wei-feng-wong"
    }
  ]
} satisfies Record<string, Member[]>;
