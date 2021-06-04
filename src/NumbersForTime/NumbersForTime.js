import React from "react";

export const Field = () => {
	const [showChoiceNumber, setShowChoiceNumber]  = React.useState(false);
	const [showChoiceTime, setShowChoiceTime] = React.useState(false);
	const [showButtonStart, setShowButtonStart = React.useState(false);
	const [showCheckAnswerPlayer, setShowCheckAnswerPlayer] = React.useState(true);
	const [randomNumber, setRandomNumber] = React.useState("");
	const [valueNumber, setValueNumber] = React.useState(1);
	const [valueTime, setValueTime] = React.useState(0.2);
	const [valueEnterPlayer, setValueEnterPlayer] = React.useState(0);

	let clearPole;
	let resultAddition;

	const [result, setresult] = React.useState({
    	NumberResult: [],
  	})

	React.useEffect(() => {
    	setRandomNumber(getRandomInRange(1, 13));
  	}, [])

  	const onPlayerNumberChange = (event) => {
		setValueNumber(event.target.value);
	}

  	const onPlayerTimeChange = (event) => {
		setValueTime(event.target.value);
	}

	const onPlayerNumberEnter = (event) => {
		setValueEnterPlayer(event.target.value);
	}

	const clear = () => {
		setresult("");
		clearInterval(clearPole);
	}

	const start = () => {
		let resultAddition = {...result};
		for (let i = 0; i < valueNumber; i++) {
			resultNumberResult += String(randomNumber);
		}
		setShowChoiceNumber(true);
		setShowChoiceTime(true);
		setShowButtonStart(true);
		clearPole = setInterval(clear, valueTime*1000);
	}

		function getRandomInRange(min, max) {
  			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		const checkAnswer = () => {
			if (!isNaN(valueEnterPlayer)) {
				if (Number(valueEnterPlayer) === Number(resultNumberResult)) {
					alert("Правильно");
					setShowChoiceNumber(false);
					setShowChoiceTime(false);
					setShowButtonStart(false);
					setShowCheckAnswerPlayer(true);
				} else {
					alert("Неправильно");
				}				
			} else {
				alert("Неправильно, введите число");
			}
		}
	return (
		<>
			<select
				className="choiceNumber"
				disabled={showChoiceNumber}
				value={value}
				onChange={onPlayerNumberChange}
			>
				<option	value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<select
				className="choiceTime"
				disabled={showChoiceTime}
				value={value}
				onChange={onPlayerTimeChange}
			>
				<option value="0.2">0.2</option>
				<option value="0.4">0.4</option>
				<option value="0.6">0.6</option>
				<option value="0.8">0.8</option>
				<option value="1">1</option>
			</select>
			<button
				className="buttonStart"
				disabled={showButtonStart}
				onClick={start}
			>
				Начать
			</button>
			</br></br>
			<div className="pole">
				{result.NumberResult.map((el) => (
            		<span key={el}>{el}</span>
          		))}
			</div>
			</br>
			<input
				type="text"
				className="answerPlayer"
				onChange={onPlayerNumberEnter}
			>
			<button
				className="checkAnswerPlayer"
				disabled={showCheckAnswerPlayer}
				onClick={checkAnswer}
			>
				Дать ответ
			</button>
		</>
  	);
}