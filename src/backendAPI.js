// API #0. 지점들의 마커와 주소 텍스트 리스트
export const pointsData = [
  {
    farm_id: 178,
    owner_name: "황**",
    farm_name: "",
    farm_address: "가평군 북면 목동리 835-2",
    farm_coord: [127.5452529, 37.88588575],
    farm_plants: [
      {
        species__kor: "배",
        species__eng: "pear",
        variety: "신고",
        cultivar: ""
      }
    ],
    use_sms: false
  },
  {
    farm_id: 131,
    owner_name: "이**",
    farm_name: "",
    farm_address: "가평군 북면 목동복지로 9-2",
    farm_coord: [127.5498097, 37.88548202],
    farm_plants: [
      {
        species__kor: "배",
        species__eng: "pear",
        variety: "신고",
        cultivar: ""
      }
    ],
    use_sms: true
  }
];

// API #1. '오늘'부터 특정 기간(디폴트: 오늘 포함 3일)의 날씨 요약 정보
export const dailyWeathers = [
  {
    date: "2020-11-30",
    tmax: 6.19,
    tmin: -8.96,
    growth: null,
    frostRate: "높음",
    frozenDamage: "주의"
  },
  {
    date: "2020-12-01",
    tmax: 7.45,
    tmin: -9.29,
    growth: null,
    frostRate: "높음",
    frozenDamage: "주의"
  },
  {
    date: "2020-12-02",
    tmax: 7.34,
    tmin: -6.3,
    growth: null,
    frostRate: "낮음",
    frozenDamage: "안전"
  }
];

// API #2. '오늘'부터 특정 기간(디폴트: 오늘 포함 3일)의 시간별 기온 데이터
export const temperatureTimeline = [
  {
    date: "2020-10-30 00:00",
    value: -30
  },
  {
    date: "2020-10-30 01:00",
    value: -10
  },
  {
    date: "2020-10-30 02:00",
    value: -10
  },
  {
    date: "2020-10-30 03:00",
    value: -5
  },
  {
    date: "2020-10-30 04:00",
    value: 0
  },
  {
    date: "2020-10-30 05:00",
    value: 5
  },
  {
    date: "2020-10-30 06:00",
    value: 10
  },
  {
    date: "2020-10-30 07:00",
    value: 15
  },
  {
    date: "2020-10-30 08:00",
    value: 20
  },
  {
    date: "2020-10-30 09:00",
    value: 25
  },
  {
    date: "2020-10-30 10:00",
    value: 50
  },
  {
    date: "2020-10-30 11:00",
    value: -7
  },
  {
    date: "2020-10-30 12:00",
    value: 20
  },
  {
    date: "2020-10-30 13:00",
    value: 6
  },
  {
    date: "2020-10-30 14:00",
    value: 5.5
  },
  {
    date: "2020-10-30 15:00",
    value: 5
  },
  {
    date: "2020-10-30 16:00",
    value: 5
  },
  {
    date: "2020-10-30 17:00",
    value: 5.13
  },
  {
    date: "2020-10-30 18:00",
    value: 5.2
  },
  {
    date: "2020-10-30 19:00",
    value: 4.1
  },
  {
    date: "2020-10-30 20:00",
    value: 3
  },
  {
    date: "2020-10-30 21:00",
    value: 2
  },
  {
    date: "2020-10-22 22:00",
    value: 1
  },
  {
    date: "2020-10-22 23:00",
    value: 0
  },
  {
    date: "2020-12-01 00:00",
    value: 0
  },
  {
    date: "2020-10-23 01:00",
    value: 0
  },
  {
    date: "2020-10-23 02:00",
    value: 1
  },
  {
    date: "2020-10-23 03:00",
    value: 2
  },
  {
    date: "2020-10-23 04:00",
    value: 3
  },
  {
    date: "2020-10-23 05:00",
    value: 3.5
  },
  {
    date: "2020-10-23 06:00",
    value: 2.8
  },
  {
    date: "2020-10-23 07:00",
    value: 2.5
  },
  {
    date: "2020-10-23 08:00",
    value: 2.2
  },
  {
    date: "2020-10-23 09:00",
    value: 3
  },
  {
    date: "2020-10-23 10:00",
    value: 3.5
  },
  {
    date: "2020-10-23 11:00",
    value: 4.5
  },
  {
    date: "2020-12-01 12:00",
    value: 6.1
  },
  {
    date: "2020-10-23 13:00",
    value: 6.8
  },
  {
    date: "2020-10-23 14:00",
    value: 7
  },
  {
    date: "2020-10-23 15:00",
    value: 7.15
  },
  {
    date: "2020-10-23 16:00",
    value: -7.1
  },
  {
    date: "2020-10-23 17:00",
    value: 6.8
  },
  {
    date: "2020-10-23 18:00",
    value: 5.5
  },
  {
    date: "2020-10-23 19:00",
    value: 4.3
  },
  {
    date: "2020-10-23 20:00",
    value: 3.8
  },
  {
    date: "2020-10-23 21:00",
    value: 3
  },
  {
    date: "2020-10-23 22:00",
    value: 3
  },
  {
    date: "2020-10-23 23:00",
    value: 2
  },
  {
    date: "2020-12-02 00:00",
    value: 0
  },
  {
    date: "2020-10-24 01:00",
    value: 0
  },
  {
    date: "2020-10-24 02:00",
    value: 0
  },
  {
    date: "2020-10-24 03:00",
    value: -2
  },
  {
    date: "2020-10-24 04:00",
    value: 3
  },
  {
    date: "2020-10-24 05:00",
    value: 3.5
  },
  {
    date: "2020-10-24 06:00",
    value: 3
  },
  {
    date: "2020-10-24 07:00",
    value: 3.3
  },
  {
    date: "2020-10-24 08:00",
    value: 4
  },
  {
    date: "2020-10-24 09:00",
    value: 4
  },
  {
    date: "2020-10-24 10:00",
    value: 5
  },
  {
    date: "2020-10-24 11:00",
    value: 6
  },
  {
    date: "2020-12-02 12:00",
    value: 7
  },
  {
    date: "2020-10-24 13:00",
    value: 7.15
  },
  {
    date: "2020-10-24 14:00",
    value: 7
  },
  {
    date: "2020-10-24 15:00",
    value: 6
  },
  {
    date: "2020-10-24 16:00",
    value: 5
  },
  {
    date: "2020-10-24 17:00",
    value: 5
  },
  {
    date: "2020-10-24 18:00",
    value: 4
  },
  {
    date: "2020-10-24 19:00",
    value: 3
  },
  {
    date: "2020-10-24 20:00",
    value: 2
  },
  {
    date: "2020-10-24 21:00",
    value: 0
  },
  {
    date: "2020-10-24 22:00",
    value: -5
  },
  {
    date: "2020-10-24 23:00",
    value: -10
  }
];

// API #3. '오늘'부터 특정 기간(디폴트: 오늘 포함 3일)의 일별 강우량
export const dailyRain = [
  {
    date: "2020-10-30",
    value: 0
  },
  {
    date: "2020-12-01",
    value: 0
  },
  {
    date: "2020-12-01",
    value: 0
  }
];

// API #4. '오늘'부터 특정 기간(디폴트: 오늘 포함 3일)의 일별 습도
export const dailyHumid = [
  {
    date: "2020-10-30",
    value: 83.18
  },
  {
    date: "2020-12-01",
    value: 62.27
  },
  {
    date: "2020-12-02",
    value: 59
  }
];

// API #5. '오늘'부터 특정 기간(디폴트: 오늘 포함 3일)의 일별 평균 풍속
export const dailyAverageWind = [
  {
    date: "2020-10-30",
    value: 1.68
  },
  {
    date: "2020-12-01",
    value: 1.22
  },
  {
    date: "2020-12-02",
    value: 1.22
  }
];

// API #6. '오늘'부터 특정 기간(디폴트: 오늘 포함 3일)의 일별 최고 풍속
export const dailyMaxWind = [
  {
    date: "2020-10-30",
    value: 1.68
  },
  {
    date: "2020-12-01",
    value: 1.22
  },
  {
    date: "2020-12-02",
    value: 1.22
  }
];

// API #7. '오늘'부터 특정 기간(디폴트: 오늘 포함 3일)의 일별 일사량
export const dailyIns = [
  {
    date: "2020-10-30",
    value: 5
  },
  {
    date: "2020-12-01",
    value: 4
  },
  {
    date: "2020-12-02",
    value: 5
  }
];

// API #8. '오늘'부터 특정 기간(디폴트: 오늘 포함 3일)의 일별 일조시간
export const dailySunshine = [
  {
    date: "2020-10-30",
    value: 7.5
  },
  {
    date: "2020-12-01",
    value: 8.2
  },
  {
    date: "2020-12-01",
    value: 4.6
  }
];

// API #9. '오늘'을 기준으로 10일 간의 최저/최고 기온 정보 ('오늘' 포함 10일)
export const weeklyMinMaxTemperatures = [
  {
    date: "2020-10-30",
    tmin: -4,
    tmax: 5
  },
  {
    date: "2020-12-01",
    tmin: -5,
    tmax: 7
  },
  {
    date: "2020-12-02",
    tmin: -4,
    tmax: 6
  },
  {
    date: "2020-12-03",
    tmin: -4,
    tmax: 5
  },
  {
    date: "2020-12-04",
    tmin: -6,
    tmax: 7
  },
  {
    date: "2020-12-05",
    tmin: -5,
    tmax: 7
  },
  {
    date: "2020-12-06",
    tmin: -3,
    tmax: 8
  },
  {
    date: "2020-12-07",
    tmin: -1,
    tmax: 6
  },
  {
    date: "2020-12-08",
    tmin: -5,
    tmax: 4
  },
  {
    date: "2020-12-09",
    tmin: -6,
    tmax: 5
  }
];
