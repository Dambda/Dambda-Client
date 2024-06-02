import { useEffect, useState } from 'react';

const useRandomNumbers = (min, max, count) => {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        // 상태 직접 참조 대신 새로운 상태 계산을 위해 함수형 업데이트 사용
        setNumbers(currentNumbers => {
            const newNumbers = [...currentNumbers];
            while(newNumbers.length < count){
                const randNum = Math.floor(Math.random() * (max - min + 1) + min);
                if(!newNumbers.includes(randNum)){
                    newNumbers.push(randNum);
                }
            }
            return newNumbers;
        });
    }, [min, max, count]); // min, max, count를 의존성 배열에 추가하여 값이 변경될 때마다 useEffect가 실행되도록 함

    return numbers;
}

export default useRandomNumbers;
