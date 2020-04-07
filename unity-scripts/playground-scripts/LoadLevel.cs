using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class LoadLevel : MonoBehaviour
{

  // Start is called before the first frame update
  void Start()
  {

  }

  // Update is called once per frame
  void Update()
  {
    // Debug.Log(SceneManager.GetActiveScene().name);
    if (Input.GetKeyDown("p"))
    {
      // Only specifying the sceneName or sceneBuildIndex will load the Scene with the Single mode
      SceneManager.LoadScene("Level 2", LoadSceneMode.Single);
    }
  }
}
