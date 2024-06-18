// 각각의 아이템들에대한 정보들
const BEST_LIST = [ 
    {item_no: 1, src: '1.jpg', title: '얼핏보면 전등같은 빗자루세트', o_price: 10000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 2, src: '2.jpg', title: '하얀 원통', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 3, src: '3.jpg', title: '원피스 같지만 알고보면 앞치마', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 4, src: '4.jpg', title: '검정 핸드백 같은 토트백', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 5, src: '5.jpg', title: '상의 같지만 뎅뎅이 하의', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 6, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 7, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 8, src: '8.jpg', title: '더콤마-베스트', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    
    {item_no: 9, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 10, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 11, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 12, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'},  
    {item_no: 13, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 14, src: '4.jpg', title: '더콤마-베스트', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 15, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 16, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 

    {item_no: 17, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 18, src: '8.jpg', title: '더콤마-베스트', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 19, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 20, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 21, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},  
];
const NEW_LIST = [ 
    {item_no: 1, src: '1.jpg', src2: '4.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'},  
    {item_no: 2, src: '2.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 3, src: '3.jpg', src2: '6.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 4, src: '4.jpg', src2: '7.jpg', title: '더콤마-NEW', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 5, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 6, src: '6.jpg', src2: '2.jpg', title: '더콤마-NEW', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 7, src: '7.jpg', src2: '4.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 8, src: '8.jpg', src2: '1.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 9, src: '4.jpg', src2: '7.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 10, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 11, src: '6.jpg', src2: '2.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 12, src: '7.jpg', src2: '4.jpg', title: '더콤마-NEW', o_price: 10000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 13, src: '8.jpg', src2: '1.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 14, src: '4.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 15, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 16, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 17, src: '7.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 18, src: '8.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 19, src: '2.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 20, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 21, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
    {item_no: 22, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 23, src: '7.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'},   
];
const OUTER_LIST = [ 
    {item_no: 1, src: '1.jpg', title: '더콤마-베스트', o_price: 10000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 2, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 3, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 4, src: '4.jpg', title: '더콤마-베스트', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 5, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 6, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 7, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 8, src: '8.jpg', title: '더콤마-베스트', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    
    {item_no: 9, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 10, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 11, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 12, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'},  
    {item_no: 13, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 14, src: '4.jpg', title: '더콤마-베스트', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 15, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 16, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 

    {item_no: 17, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 18, src: '8.jpg', title: '더콤마-베스트', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 19, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 20, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 21, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},  
];
const TOP_LIST = [ 
    {item_no: 1, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'},  
    {item_no: 2, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 3, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 4, src: '4.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 5, src: '7.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 6, src: '8.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 7, src: '2.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 8, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 9, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 10, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 11, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 12, src: '1.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 10000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 13, src: '2.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 14, src: '4.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 15, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 16, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 17, src: '7.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 18, src: '8.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 19, src: '2.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 20, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 21, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
    {item_no: 22, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 23, src: '7.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'},   
];
const BOTOM_LIST = [ 
    {item_no: 1, src: '1.jpg', title: '더콤마-베스트', o_price: 10000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 2, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 3, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 4, src: '4.jpg', title: '더콤마-베스트', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 5, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 6, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 7, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 8, src: '8.jpg', title: '더콤마-베스트', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    
    {item_no: 9, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 10, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 11, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 12, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'},  
    {item_no: 13, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 14, src: '4.jpg', title: '더콤마-베스트', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 15, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 16, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 

    {item_no: 17, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 18, src: '8.jpg', title: '더콤마-베스트', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 19, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 20, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 21, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},  
];
const ACC_LIST = [ 
    {item_no: 1, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'},  
    {item_no: 2, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 3, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 4, src: '4.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 5, src: '7.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 6, src: '8.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 7, src: '2.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 8, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 9, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 10, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 11, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 12, src: '1.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 10000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 13, src: '2.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 14, src: '4.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 15, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 16, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 17, src: '7.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 18, src: '8.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 19, src: '2.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 20, src: '3.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 21, src: '5.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
    {item_no: 22, src: '6.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 23, src: '7.jpg', src2: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'},   
];
const BAG_LIST = [ 
    {item_no: 1, src: '1.jpg', title: '더콤마-베스트', o_price: 10000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 2, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 3, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 4, src: '4.jpg', title: '더콤마-베스트', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 5, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 6, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 7, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 8, src: '8.jpg', title: '더콤마-베스트', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    
    {item_no: 9, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 10, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 11, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 12, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'},  
    {item_no: 13, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 14, src: '4.jpg', title: '더콤마-베스트', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 15, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 16, src: '6.jpg', title: '더콤마-베스트', o_price: 60000, s_price: 30000, desc: '상품에 대한 설명이 표시됩니다.'}, 

    {item_no: 17, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 18, src: '8.jpg', title: '더콤마-베스트', o_price: 80000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 19, src: '2.jpg', title: '더콤마-베스트', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 20, src: '3.jpg', title: '더콤마-베스트', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
    {item_no: 21, src: '5.jpg', title: '더콤마-베스트', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},  
];  

// 페이지 타이틀 용도
const MENU_LIST = ['BEST', 'NEW 5%', 'OUTER', 'TOP', 'BOTOM', 'ACC', 'BAG&SHOES'];
// 클래스 이름 삽입할 용도
const SEC_LIST = ['best','new','outer','top', 'bottom', 'acc','bag'];

// url 에서 정보 가져오기
function get_url_info(keyword) {
    let url = location.href; //url의 주소를 다 불러옴
    url = url.split("?");

    if(url.length > 1) {
        url = url[1]; // cate_no=0
        url = url.split("&"); // [cate_no=0#]

        for(let i=0; i < url.length; i++) {
            // console.log("url: "+url);
            let tmp_url = url[i].split("=");// [cate_no, 0]
            if(keyword == tmp_url[0]) { // cate_no
                if(tmp_url[1].match("#")) {
                    // console.log("1: " + tmp_url[1]);
                    tmp_url[1] = tmp_url[1].split("#")[0]; // [0, ]
                    // console.log("2: " + tmp_url[1]);
                }
                return tmp_url[1];

            }
            // else {
            //     return null
            // }
        }
    }
    else {
        return null
    }
}

// html 안에 삽입 
function load_item(find_cate_no, qty) {
    const list_array = [BEST_LIST, NEW_LIST, OUTER_LIST, TOP_LIST, BOTOM_LIST, ACC_LIST, BAG_LIST];
    const SEC_LIST = ['best','new','outer','top', 'bottom', 'acc','bag'];

    let TMP_ITEM_LIST = list_array[find_cate_no]; 
    if(get_url_info('cate_no') != null) {
        document.getElementsByClassName('sec')[0].setAttribute('id',SEC_LIST[find_cate_no]);
        document.getElementsByClassName('sec_title')[0].innerText = MENU_LIST[find_cate_no];
    }

    // 기존에 몇개 있는지 확인하고 개수 저장
    let item_length = $('#'+SEC_LIST[find_cate_no]+' .item_container > li').length;
 
    // $('#best .item_container > li').length;

    let list = '';
    for(let i=item_length; i< item_length + qty; i++) { 
        if(i < TMP_ITEM_LIST.length) {
            let item_no = TMP_ITEM_LIST[i].item_no;
            let src = TMP_ITEM_LIST[i].src; 
            let src2 = TMP_ITEM_LIST[i].src2; 
            let title = TMP_ITEM_LIST[i].title; 
            let o_price = TMP_ITEM_LIST[i].o_price;
            let s_price = TMP_ITEM_LIST[i].s_price;
            let desc = TMP_ITEM_LIST[i].desc;
            let c_name = SEC_LIST[find_cate_no];

            list += '<li class="'+c_name+'_items item_init">';
            list += '   <div class="item_img">';
            list += '       <a href="item.html?cate_no='+find_cate_no+'&item_no='+item_no+'">';
            if(src2 != null) {
                list += '           <img src="img/items/'+c_name+'/'+src2+'" alt="2랭크 이미지">';
            }
            list += '           <img src="img/items/'+c_name+'/'+src+'" alt="랭크 이미지">';
            list += '       </a>';
            list += '   </div>';
            list += '   <div class="item_info">';
            list += '       <div class="item_info_title">'+title+'</div>';
            list += '       <div class="o_price">'+comma(o_price)+'원</div>';
            list += '       <div class="s_price">'+comma(s_price)+'원</div>';
            list += '       <div class="item_desc">'+desc+'</div>';
            list += '   </div>';
            list += '</li>';
        }
        else {
            break;
        }
    }

    console.log(list)
    $('#'+SEC_LIST[find_cate_no]+' .item_container').append(list)
}

function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}