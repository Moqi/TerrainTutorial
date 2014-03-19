#pragma strict

var scorePts: int = 0;

function Start () {

}

function Update () {
	guiText.text = "<color=gray>SCORE</color>: <size=50>"+ scorePts.ToString() +"</size>";
}

function OnGUI () {
	if (GUI.Button (Rect (10,100,100,30), "KILL BIRD!")) {
		scorePts++;
	}
}