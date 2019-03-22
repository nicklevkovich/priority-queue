class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if ((this.left)&&(this.right)) return
			else if (this.left) this.right = node
				else this.left = node;
	}

	removeChild(node) {
		if (this.left === node) this.left = null
			else if (this.right === node) this.right = null
				else throw new Error();
		this.parent = null;
	}

	remove() {
		if (this.parent === null) return;
	}

	swapWithParent() {

	}
}

module.exports = Node;
