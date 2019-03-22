const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;
	}

	push(data, priority) {
		let h = new Node(data, priority);
		this.insertNode(h);
		this.shiftNodeUp(h);
	}

	pop() {

	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {

	}

	clear() {

	}

	insertNode(node) {

	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
