function chessboard(piece,point,moves,posi) {
	this.piece = piece;
	this.point = point;
	this.moves = moves;
	this.posi = posi;
}
function pieces() {
	
}
function pawn() {
	
}
pieces.prototype = new chessboard();
pawn.prototype = new pieces();