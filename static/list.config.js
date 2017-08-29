(function (global) {
  global.gameConfigData = {
    "gameType": "cqssc",
    "gameTypeCn": "重庆时时彩",
    "defaultMethod": "housan.zhixuan.fushi",
    "lotteryId": 99101,
    "userLvl": -1,
    "userId": 1292693,
    "userName": "x1234",
    "awardRetStatus": 0,
    "awardGroupRetStatus": 1,
    "lhcStatus": 1,
    "backOutStartFee": 0,
    "backOutRadio": 0,
    "isSupport2000": true,
    "isfirstimeuse2000": false,
    "isfirstimeusediamond2000": false,
    "gameMethods": [{
      "title": "五星",
      "name": "wuxing",
      "isdiamond": null,
      "isNew": 0,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "wuxing",
        "childs": [{"title": "复式", "name": "fushi", "parent": "zhixuan", "mode": "wuxing"}, {
          "title": "单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "wuxing"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "wuxing",
        "childs": [{"title": "组选120", "name": "zuxuan120", "parent": "zuxuan", "mode": "wuxing"}, {
          "title": "组选60",
          "name": "zuxuan60",
          "parent": "zuxuan",
          "mode": "wuxing"
        }, {"title": "组选30", "name": "zuxuan30", "parent": "zuxuan", "mode": "wuxing"}, {
          "title": "组选20",
          "name": "zuxuan20",
          "parent": "zuxuan",
          "mode": "wuxing"
        }, {"title": "组选10", "name": "zuxuan10", "parent": "zuxuan", "mode": "wuxing"}, {
          "title": "组选5",
          "name": "zuxuan5",
          "parent": "zuxuan",
          "mode": "wuxing"
        }]
      }, {
        "title": "不定位",
        "name": "budingwei",
        "parent": "wuxing",
        "childs": [{
          "title": "一码不定位",
          "name": "yimabudingwei",
          "parent": "budingwei",
          "mode": "wuxing"
        }, {"title": "二码不定位", "name": "ermabudingwei", "parent": "budingwei", "mode": "wuxing"}, {
          "title": "三码不定位",
          "name": "sanmabudingwei",
          "parent": "budingwei",
          "mode": "wuxing"
        }]
      }, {
        "title": "趣味",
        "name": "quwei",
        "parent": "wuxing",
        "childs": [{
          "title": "一帆风顺",
          "name": "yifanfengshun",
          "parent": "quwei",
          "mode": "wuxing"
        }, {"title": "好事成双", "name": "haoshichengshuang", "parent": "quwei", "mode": "wuxing"}, {
          "title": "三星报喜",
          "name": "sanxingbaoxi",
          "parent": "quwei",
          "mode": "wuxing"
        }, {"title": "四季发财", "name": "sijifacai", "parent": "quwei", "mode": "wuxing"}]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "四星",
      "name": "sixing",
      "isdiamond": null,
      "isNew": 0,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "sixing",
        "childs": [{"title": "复式", "name": "fushi", "parent": "zhixuan", "mode": "sixing"}, {
          "title": "单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "sixing"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "sixing",
        "childs": [{"title": "组选24", "name": "zuxuan24", "parent": "zuxuan", "mode": "sixing"}, {
          "title": "组选12",
          "name": "zuxuan12",
          "parent": "zuxuan",
          "mode": "sixing"
        }, {"title": "组选6", "name": "zuxuan6", "parent": "zuxuan", "mode": "sixing"}, {
          "title": "组选4",
          "name": "zuxuan4",
          "parent": "zuxuan",
          "mode": "sixing"
        }]
      }, {
        "title": "不定位",
        "name": "budingwei",
        "parent": "sixing",
        "childs": [{
          "title": "一码不定位",
          "name": "yimabudingwei",
          "parent": "budingwei",
          "mode": "sixing"
        }, {"title": "二码不定位", "name": "ermabudingwei", "parent": "budingwei", "mode": "sixing"}]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "前三",
      "name": "qiansan",
      "isdiamond": null,
      "isNew": 0,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "qiansan",
        "childs": [{"title": "复式", "name": "fushi", "parent": "zhixuan", "mode": "qiansan"}, {
          "title": "单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "qiansan"
        }, {"title": "直选和值", "name": "hezhi", "parent": "zhixuan", "mode": "qiansan"}, {
          "title": "跨度",
          "name": "kuadu",
          "parent": "zhixuan",
          "mode": "qiansan"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "qiansan",
        "childs": [{"title": "组选和值", "name": "hezhi", "parent": "zuxuan", "mode": "qiansan"}, {
          "title": "组三",
          "name": "zusan",
          "parent": "zuxuan",
          "mode": "qiansan"
        }, {"title": "组六", "name": "zuliu", "parent": "zuxuan", "mode": "qiansan"}, {
          "title": "混合组选",
          "name": "hunhezuxuan",
          "parent": "zuxuan",
          "mode": "qiansan"
        }, {"title": "组选包胆", "name": "baodan", "parent": "zuxuan", "mode": "qiansan"}, {
          "title": "组三单式",
          "name": "zusandanshi",
          "parent": "zuxuan",
          "mode": "qiansan"
        }, {"title": "组六单式", "name": "zuliudanshi", "parent": "zuxuan", "mode": "qiansan"}]
      }, {
        "title": "不定位",
        "name": "budingwei",
        "parent": "qiansan",
        "childs": [{
          "title": "一码不定位",
          "name": "yimabudingwei",
          "parent": "budingwei",
          "mode": "qiansan"
        }, {"title": "二码不定位", "name": "ermabudingwei", "parent": "budingwei", "mode": "qiansan"}]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "中三",
      "name": "zhongsan",
      "isdiamond": null,
      "isNew": 0,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "zhongsan",
        "childs": [{"title": "复式", "name": "fushi", "parent": "zhixuan", "mode": "zhongsan"}, {
          "title": "单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "zhongsan"
        }, {"title": "直选和值", "name": "hezhi", "parent": "zhixuan", "mode": "zhongsan"}, {
          "title": "跨度",
          "name": "kuadu",
          "parent": "zhixuan",
          "mode": "zhongsan"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "zhongsan",
        "childs": [{"title": "组选和值", "name": "hezhi", "parent": "zuxuan", "mode": "zhongsan"}, {
          "title": "组三",
          "name": "zusan",
          "parent": "zuxuan",
          "mode": "zhongsan"
        }, {"title": "组六", "name": "zuliu", "parent": "zuxuan", "mode": "zhongsan"}, {
          "title": "混合组选",
          "name": "hunhezuxuan",
          "parent": "zuxuan",
          "mode": "zhongsan"
        }, {"title": "组选包胆", "name": "baodan", "parent": "zuxuan", "mode": "zhongsan"}, {
          "title": "组三单式",
          "name": "zusandanshi",
          "parent": "zuxuan",
          "mode": "zhongsan"
        }, {"title": "组六单式", "name": "zuliudanshi", "parent": "zuxuan", "mode": "zhongsan"}]
      }, {
        "title": "不定位",
        "name": "budingwei",
        "parent": "zhongsan",
        "childs": [{
          "title": "一码不定位",
          "name": "yimabudingwei",
          "parent": "budingwei",
          "mode": "zhongsan"
        }, {"title": "二码不定位", "name": "ermabudingwei", "parent": "budingwei", "mode": "zhongsan"}]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "后三",
      "name": "housan",
      "isdiamond": null,
      "isNew": 0,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "housan",
        "childs": [{"title": "复式", "name": "fushi", "parent": "zhixuan", "mode": "housan"}, {
          "title": "单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "housan"
        }, {"title": "直选和值", "name": "hezhi", "parent": "zhixuan", "mode": "housan"}, {
          "title": "跨度",
          "name": "kuadu",
          "parent": "zhixuan",
          "mode": "housan"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "housan",
        "childs": [{"title": "组选和值", "name": "hezhi", "parent": "zuxuan", "mode": "housan"}, {
          "title": "组三",
          "name": "zusan",
          "parent": "zuxuan",
          "mode": "housan"
        }, {"title": "组六", "name": "zuliu", "parent": "zuxuan", "mode": "housan"}, {
          "title": "混合组选",
          "name": "hunhezuxuan",
          "parent": "zuxuan",
          "mode": "housan"
        }, {"title": "组选包胆", "name": "baodan", "parent": "zuxuan", "mode": "housan"}, {
          "title": "组三单式",
          "name": "zusandanshi",
          "parent": "zuxuan",
          "mode": "housan"
        }, {"title": "组六单式", "name": "zuliudanshi", "parent": "zuxuan", "mode": "housan"}]
      }, {
        "title": "不定位",
        "name": "budingwei",
        "parent": "housan",
        "childs": [{
          "title": "一码不定位",
          "name": "yimabudingwei",
          "parent": "budingwei",
          "mode": "housan"
        }, {"title": "二码不定位", "name": "ermabudingwei", "parent": "budingwei", "mode": "housan"}]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "前二",
      "name": "qianer",
      "isdiamond": null,
      "isNew": 0,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "qianer",
        "childs": [{"title": "直选复式", "name": "fushi", "parent": "zhixuan", "mode": "qianer"}, {
          "title": "直选单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "qianer"
        }, {"title": "直选和值", "name": "hezhi", "parent": "zhixuan", "mode": "qianer"}, {
          "title": "跨度",
          "name": "kuadu",
          "parent": "zhixuan",
          "mode": "qianer"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "qianer",
        "childs": [{"title": "组选复式", "name": "fushi", "parent": "zuxuan", "mode": "qianer"}, {
          "title": "组选单式",
          "name": "danshi",
          "parent": "zuxuan",
          "mode": "qianer"
        }, {"title": "组选和值", "name": "hezhi", "parent": "zuxuan", "mode": "qianer"}, {
          "title": "组选包胆",
          "name": "baodan",
          "parent": "zuxuan",
          "mode": "qianer"
        }]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "后二",
      "name": "houer",
      "isdiamond": null,
      "isNew": 0,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "houer",
        "childs": [{"title": "直选复式", "name": "fushi", "parent": "zhixuan", "mode": "houer"}, {
          "title": "直选单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "houer"
        }, {"title": "直选和值", "name": "hezhi", "parent": "zhixuan", "mode": "houer"}, {
          "title": "跨度",
          "name": "kuadu",
          "parent": "zhixuan",
          "mode": "houer"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "houer",
        "childs": [{"title": "组选复式", "name": "fushi", "parent": "zuxuan", "mode": "houer"}, {
          "title": "组选单式",
          "name": "danshi",
          "parent": "zuxuan",
          "mode": "houer"
        }, {"title": "组选和值", "name": "hezhi", "parent": "zuxuan", "mode": "houer"}, {
          "title": "组选包胆",
          "name": "baodan",
          "parent": "zuxuan",
          "mode": "houer"
        }]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "一星",
      "name": "yixing",
      "isdiamond": null,
      "isNew": 0,
      "childs": [{
        "title": "定位胆",
        "name": "dingweidan",
        "parent": "yixing",
        "childs": [{"title": "复式", "name": "fushi", "parent": "dingweidan", "mode": "yixing"}]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "超级2000_后三",
      "name": "housan_2000",
      "isdiamond": null,
      "isNew": 1,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "housan_2000",
        "childs": [{"title": "复式", "name": "fushi", "parent": "zhixuan", "mode": "housan_2000"}, {
          "title": "单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "housan_2000"
        }, {"title": "直选和值", "name": "hezhi", "parent": "zhixuan", "mode": "housan_2000"}, {
          "title": "跨度",
          "name": "kuadu",
          "parent": "zhixuan",
          "mode": "housan_2000"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "housan_2000",
        "childs": [{"title": "组选和值", "name": "hezhi", "parent": "zuxuan", "mode": "housan_2000"}, {
          "title": "组三",
          "name": "zusan",
          "parent": "zuxuan",
          "mode": "housan_2000"
        }, {"title": "组六", "name": "zuliu", "parent": "zuxuan", "mode": "housan_2000"}, {
          "title": "混合组选",
          "name": "hunhezuxuan",
          "parent": "zuxuan",
          "mode": "housan_2000"
        }, {"title": "组选包胆", "name": "baodan", "parent": "zuxuan", "mode": "housan_2000"}, {
          "title": "组三单式",
          "name": "zusandanshi",
          "parent": "zuxuan",
          "mode": "housan_2000"
        }, {"title": "组六单式", "name": "zuliudanshi", "parent": "zuxuan", "mode": "housan_2000"}]
      }, {
        "title": "不定位",
        "name": "budingwei",
        "parent": "housan_2000",
        "childs": [{
          "title": "一码不定位",
          "name": "yimabudingwei",
          "parent": "budingwei",
          "mode": "housan_2000"
        }, {"title": "二码不定位", "name": "ermabudingwei", "parent": "budingwei", "mode": "housan_2000"}]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "超级2000_后二",
      "name": "houer_2000",
      "isdiamond": null,
      "isNew": 1,
      "childs": [{
        "title": "直选",
        "name": "zhixuan",
        "parent": "houer_2000",
        "childs": [{"title": "直选复式", "name": "fushi", "parent": "zhixuan", "mode": "houer_2000"}, {
          "title": "直选单式",
          "name": "danshi",
          "parent": "zhixuan",
          "mode": "houer_2000"
        }, {"title": "直选和值", "name": "hezhi", "parent": "zhixuan", "mode": "houer_2000"}, {
          "title": "跨度",
          "name": "kuadu",
          "parent": "zhixuan",
          "mode": "houer_2000"
        }]
      }, {
        "title": "组选",
        "name": "zuxuan",
        "parent": "houer_2000",
        "childs": [{"title": "组选复式", "name": "fushi", "parent": "zuxuan", "mode": "houer_2000"}, {
          "title": "组选单式",
          "name": "danshi",
          "parent": "zuxuan",
          "mode": "houer_2000"
        }, {"title": "组选和值", "name": "hezhi", "parent": "zuxuan", "mode": "houer_2000"}, {
          "title": "组选包胆",
          "name": "baodan",
          "parent": "zuxuan",
          "mode": "houer_2000"
        }]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }, {
      "title": "超级2000_一星",
      "name": "yixing_2000",
      "isdiamond": null,
      "isNew": 1,
      "childs": [{
        "title": "定位胆",
        "name": "dingweidan",
        "parent": "yixing_2000",
        "childs": [{"title": "复式", "name": "fushi", "parent": "dingweidan", "mode": "yixing_2000"}]
      }],
      "gameType": null,
      "gameTypeCn": null,
      "gameTips": null
    }],
    "awardGroups": [{
      "gid": 12,
      "awardGroupId": 14898046,
      "awardName": "奖金组1800",
      "betType": 1,
      "directRet": 450,
      "threeoneRet": 450,
      "superRet": 0,
      "lhcYear": 0,
      "lhcColor": 0,
      "createTime": 1432783083053,
      "updateTimte": 1456903126000,
      "awardGroupRetStatus": 1
    }],
    "dynamicConfigUrl": "/gameBet/cqssc/dynamicConfig",
    "uploadPath": "/gameBet/cqssc/betFile",
    "queryUserBalUrl": "/gameBet/queryUserBal",
    "getUserOrdersUrl": "/gameBet/cqssc/getUserOrders",
    "getUserPlansUrl": "/gameBet/cqssc/getUserPlans",
    "getHandingChargeUrl": "/gameBet/cqssc/handlingCharge?amount=",
    "getBetAwardUrl": "/gameBet/cqssc/getBetAward",
    "getHotColdUrl": "/gameBet/cqssc/frequency",
    "trendChartUrl": "/gameBet/cqssc/trendChart?type=",
    "getLotteryLogoPath": "/static/images/game/logos/logo-cqssc.png",
    "queryGameUserAwardGroupByLotteryIdUrl": "/gameBet/cqssc/queryGameUserAwardGroupByLotteryId",
    "saveProxyBetGameAwardGroupUrl": "/gameBet/cqssc/saveBetAward",
    "sumbitUrl": "/gameBet/cqssc/submit",
    "indexInit": "/gameBet/cqssc/indexInit",
    "poolBouns": null,
    "isLotteryStopSale": false,
    "lastNumberUrl": "/gameBet/cqssc/lastNumber",
    "sourceList": [],
    "helpLink": "/help/queryLotteryDetail?helpId=869",
    "chips": [1, 2, 5, 10, 20, 50, 100, 500, 1000, 5000],
    "chipsSelected": [10, 20, 50, 100, 500],
    "ballLists": null,
    "gameOdds": null,
    "gameZodiac": null,
    "gameTips": null,
    "queryStraightOddsUrl": "/gameBet/cqssc/straightOdds"
  };

})(window);
