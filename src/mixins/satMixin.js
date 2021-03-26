import {DATA_DISPLAY_RECEIVETIME_TITLE} from '@/config/display'
import saids from '../utils/saidMap'

let sicoMap = new Map()
sicoMap.set('111', 'B1I')
sicoMap.set('112', 'B1Cd')
sicoMap.set('113', 'B1Cp')
sicoMap.set('114', 'B1Cpa')
sicoMap.set('115', 'B1Cpb')
sicoMap.set('116', 'B1A')
sicoMap.set('117', 'SBAS-B1C')
sicoMap.set('118', 'SBAS-B1Ad')
sicoMap.set('119', 'SBAS-B1Ap')

sicoMap.set('121', 'B2ad')
sicoMap.set('122', 'B2ap')
sicoMap.set('123', 'B2bI')
sicoMap.set('124', 'B2bQ')
sicoMap.set('125', 'SBAS-B2ad')
sicoMap.set('126', 'SBAS-B2ap')
sicoMap.set('127', 'PPP-B2bI')
sicoMap.set('128', 'PPP-B2bQ')

sicoMap.set('131', 'B3I')
sicoMap.set('132', 'B3Q')
sicoMap.set('133', 'B3Ad')
sicoMap.set('134', 'B3Ap')
sicoMap.set('135', 'B3AEd')
sicoMap.set('136', 'B3AEp')

sicoMap.set('211', 'L1C/A')
sicoMap.set('212', 'L1Cd')
sicoMap.set('213', 'L1Cp')
sicoMap.set('214', 'L1P(Y)')
sicoMap.set('215', 'L1M')

sicoMap.set('221', 'L2Cd')
sicoMap.set('222', 'L2Cp')
sicoMap.set('223', 'L2P(Y)')
sicoMap.set('224', 'L2M')

sicoMap.set('231', 'L5Cd')
sicoMap.set('232', 'L5Cp')

sicoMap.set('311', 'E1A')
sicoMap.set('312', 'E1B')
sicoMap.set('313', 'E1C')

sicoMap.set('321', 'E5aI')
sicoMap.set('322', 'E5aQ')
sicoMap.set('323', 'E5bI')
sicoMap.set('324', 'E5bQ')

sicoMap.set('331', 'E6A')
sicoMap.set('332', 'E6B')
sicoMap.set('333', 'E6C')

sicoMap.set('411', 'G1OF')
sicoMap.set('412', 'G1SF')
sicoMap.set('413', 'G1OC')
sicoMap.set('414', 'G1SC')
sicoMap.set('415', 'G1OCM')

sicoMap.set('421', 'G2OF')
sicoMap.set('422', 'G2SF')
sicoMap.set('423', 'G2SC')
sicoMap.set('424', 'G2OC')

sicoMap.set('431', 'G3SC')
sicoMap.set('432', 'G3OC')

sicoMap.set('441', 'G5OC')
export default {
  data () {
    return {
      receiveTimeTitle: DATA_DISPLAY_RECEIVETIME_TITLE
    }
  },
  methods: {
    /**
     * 获取卫星id对应的名称
     * @param row
     * @param column
     * @param cellValue
     * @returns {any}
     */
    getSaidName (row, column, cellValue) {
      return saids.get(String(cellValue))
    },
    /**
     * 获取信号频点对应的名称
     * @param saidValue
     * @param cellValue
     * @returns {string|*}
     */
    getSifrName (saidValue, cellValue) {
      if (saidValue >= 150 && saidValue <= 219) {
        switch (cellValue) {
          case 1:
            return 'B1'
          case 2:
            return 'B2'
          case 3:
            return 'B3'
          default:
            return cellValue
        }
      } else if (saidValue >= 0 && saidValue <= 49) {
        switch (cellValue) {
          case 1:
            return 'L1'
          case 2:
            return 'L2'
          case 3:
            return 'L5'
          default:
            return cellValue
        }
      } else if (saidValue >= 50 && saidValue <= 99) {
        switch (cellValue) {
          case 1:
            return 'E1'
          case 2:
            return 'E5'
          case 3:
            return 'E6'
          default:
            return cellValue
        }
      } else if (saidValue >= 100 && saidValue <= 149) {
        switch (cellValue) {
          case 1:
            return 'G1'
          case 2:
            return 'G2'
          case 3:
            return 'G3'
          case 4:
            return 'G5'
          default:
            return cellValue
        }
      } else if (saidValue >= 220 && saidValue <= 255) {
        switch (cellValue) {
          default:
            return cellValue
        }
      } else if (saidValue >= 256 && saidValue <= 511) {
        return cellValue
      }
    },
    /**
     * 解析对应站点
     * @param row
     * @param column
     * @param cellValue
     * @returns {string}
     */
    getStationType (row, column, cellValue) {
      switch (cellValue) {
        case 0:
          return '海外站'
        case 1:
          return '西安站'
        default:
          break
      }
    },
    /**
     * 解析对应信号分量名称
     * @param saidValue
     * @param sifrValue
     * @param cellValue
     * @returns {any}
     */
    getSicoName (saidValue, sifrValue, cellValue) {
      if (saidValue >= 0 && saidValue <= 49) {
        return sicoMap.get('1' + sifrValue + cellValue)
      } else if (saidValue >= 50 && saidValue <= 99) {
        return sicoMap.get('2' + sifrValue + cellValue)
      } else if (saidValue >= 100 && saidValue <= 149) {
        return sicoMap.get('3' + sifrValue + cellValue)
      } else if (saidValue >= 150 && saidValue <= 219) {
        return sicoMap.get('4' + sifrValue + cellValue)
      } else if (saidValue >= 220 && saidValue <= 255) {
        return cellValue
        // 接口文档待定
        // return sicoMap.get('5' + sifrValue + cellValue)
      } else if (saidValue >= 256 && saidValue <= 511) {
        return cellValue
        // 接口文档待定
        // return sicoMap.get('6' + sifrValue + cellValue)
      } else {
        return cellValue
      }
    },
    /**
     * 解析对应天线名称
     * @param row
     * @param column
     * @param cellValue
     * @returns {string|*}
     */
    getStationName (row, column, cellValue) {
      switch (cellValue) {
        case 2:
          return '7.3米L天线'
        case 8:
          return '13米C/L_1天线'
        case 15:
          return '盱眙5米天线'
        case 16:
          return '三亚5米天线'
        case 26:
          return '明思克5米天线'
        case 30:
          return '接收机1'
        case 31:
          return '接收机2'
        case 32:
          return '接收机3'
        case 33:
          return '接收机4'
        default:
          return cellValue
      }
    }
  }
}
