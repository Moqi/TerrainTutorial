#pragma strict

function Start () {

}

function Update () {

}

// JavaScript
function OnGUI () {
	if (GUI.Button (Rect (10,100,100,30), "KILL BIRD!")) {
		print ("Die BIRD!!!");
	}
}
