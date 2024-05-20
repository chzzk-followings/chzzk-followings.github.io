const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 프록시 설정
app.use('/api', createProxyMiddleware({
    target: 'https://api.chzzk.naver.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/service/v1/channels/followings?size=10', // 프록시 경로 재작성
    },
}));

// 정적 파일 서빙 (HTML, CSS, JS)
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});