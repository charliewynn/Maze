function Player(){};
Player.prototype.x_loc = 0;
Player.prototype.y_loc = 0;
Player.prototype.location = function() { return {x:x_loc,y:y_loc} };

Player.prototype.isBoulder = false;

function Boulder(y,x)
{
	this.x_loc = x;
	this.y_loc = y;
	this.isBoulder = true;
	this.location = function() { return {x:this.x_loc,y:this.y_loc} };
};

function Switch()
{
	this.locked = true;
};

function FlipFlop(isLeft)
{
	this.isLeft = isLeft;
};

function Location(x,y)
{
	return {x:x,y:y};
};

function LocCmp(Loc1, Loc2)
{
	return Loc1.x == Loc2.x && Loc1.y == Loc2.y;
};

function DirCmp(Dir1, Dir2)
{
	return Dir1[0] == Dir2[0] && Dir1[1] == Dir2[1];
};

function Tile(type)
{
	this.isStatic = true;
	this.direction = [0,0];
	this.isSwitch = false;
	this.isGate = false;
	this.isFinish = false;
	this.isFlipFlop = false;
	this.isWall = false;
	this.type = type;
	
	switch(type)
	{
		case "1":
			this.isWall = true;
			break;
		case "s":
			this.isSwitch = true;
			break;
		case "S":
			this.isGate = true;
			break;
		case "4":
			this.isStatic = false;
			break;
		case "3":
			this.isFinish = true;
			break;
		case "d":
			this.isStatic = false;
			this.direction = [0,1];
			break;
		case "r":
			this.isStatic = false;
			this.direction = [1,0];
			break;
		case "l":
			this.isStatic = false;
			this.direction = [-1,0];
			break;
		case "u":
			this.isStatic = false;
			this.direction = [0,-1];
			break;
		case "f":
			this.isStatic = false;
			this.direction = [-1,0];
			this.isFlipFlop = true;
			break;
		case "F":
			this.isStatic = false;
			this.direction = [1,0];
			this.isFlipFlop = true;
			break;
		default:
			break;
	}
};