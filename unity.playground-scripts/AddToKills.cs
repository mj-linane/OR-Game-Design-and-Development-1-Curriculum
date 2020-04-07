using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class AddToKills : MonoBehaviour
{
  public LoadLevelAfterKills loadLevelAfterKills;

  void Start()
  {
    loadLevelAfterKills.currentKills += 1;
  }
}