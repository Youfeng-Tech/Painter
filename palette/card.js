export default class LastMayday {
  palette() {
    return ({
      width: '750rpx',
      height: '1334rpx',
      background: '#eee',
      views: [
        {
          type: "image",
          url: "/palette/bg.jpg",
          css: {
            width: '750rpx',
            height: '1334rpx'
          }
        },
        {
          id: 'text_id_1',
          type: 'text',
          text: '1234',
          css: [{
            top: `54rpx`,
            left: '190rpx',
            padding: '10rpx',
            scalable: true,
            deletable: true,
            fontSize: '60rpx',
            color: 'black',
            width: '280rpx',
          }],
        },
        {
          id: 'text_id_2',
          type: 'text',
          text: '欣赏石楠花开是我的专属交大记忆。',
          css: [{
            top: `690rpx`,
            left: '335rpx',
            padding: '10rpx',
            fontWeight: 'bold',
            fontSize: '30rpx',
            color: 'white',
            width: '280rpx',
          }],
        },
        {
          id: 'desctext1',
          type: 'text',
          text: '我是第 123456 个生成校友档案的 SJTUer',
          css: [{
            top: `180rpx`,
            left: '60rpx',
            fontSize: '26rpx',
            color: 'black',
          }],
        },
        {
          id: 'desctext2',
          type: 'text',
          text: '我的同学录里已有 123456 位校友',
          css: [{
            top: `220rpx`,
            left: '60rpx',
            fontSize: '26rpx',
            color: 'black',
          }],
        },
        {
          id: 'qrtext',
          type: 'text',
          text: '扫码查看我的完整档案',
          css: [{
            bottom: `250rpx`,
            left: '120rpx',
            padding: '10rpx',
            scalable: true,
            deletable: true,
            fontSize: '26rpx',
            color: 'black',
          }],
        },
        {
          type: 'qrcode',
          content: 'https://7072-prod-9ghaoqxlbeeff522-1317144136.tcb.qcloud.la/qrcode?id=123',
          css: {
            bottom: '210rpx',
            left: '480rpx',
            color: 'white',
            width: '120rpx',
            height: '120rpx',
          },
        },
        
      ],
    });
  }
}

