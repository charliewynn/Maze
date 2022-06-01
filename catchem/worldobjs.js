function Player()
{
	this.id = -1;
};

Player.prototype.x_loc = 0;
Player.prototype.y_loc = 6;
Player.prototype.location = function() { return {x:x_loc,y:y_loc} };

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
	this.isWall = false;
	this.direction = [0,0];
	this.type = type;
	this.doorGoesTo = "";
	
	switch(type)
	{
		case "1":
			this.isWall = true;
			break;
		case "4":
			this.isStatic = false;
			break;
		default:
			break;
	}
	
	if("abcdef".indexOf(type) != -1)
		this.doorGoesTo = type;
};