pragma solidity ^4.0.23

contract SimpleStorage {

	uint storedData;

	constructor(uint initial) {
		storedData = initial;
	}

	function setValue(uint _value) public {
		storedData = _value;
	}

	function getValue() constant public returns (uint) {
		return storedData;
	}


}