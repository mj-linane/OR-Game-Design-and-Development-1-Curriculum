using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class LoadLevelAfterKills : MonoBehaviour
{  public int killsNeeded = 4;
  public int currentKills = 0;

  // Start is called before the first frame update
  void Start()
  {

  }

  // Update is called once per frame
  void Update()
  {
    if (currentKills == killsNeeded)
    {
      // Only specifying the sceneName or sceneBuildIndex will load the Scene with the Single mode
      SceneManager.LoadScene("Level 2", LoadSceneMode.Single);
    }
  }
}
