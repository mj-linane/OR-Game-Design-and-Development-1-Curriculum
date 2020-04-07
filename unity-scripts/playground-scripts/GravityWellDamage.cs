using UnityEngine;
using System.Collections;

public class GravityWellDamage : MonoBehaviour
{
  public int healthChange = -1;
  // the amount of times (in seconds) that this Condition will call OnTriggerStay
  // i.e. if it's 1, it means that OnTriggerStay will be called every second
  // i.e. if it's 4, it means that it will be called every 4 seconds
  // ... and so on...
  public float frequency = 1f;

  private float lastTimeTriggerStayCalled;

  //This will create a dialog window asking for which dialog to add
  private void Reset()
  {
    Utils.Collider2DDialogWindow(this.gameObject, true);
  }

  // This function will be called at the beginning
  void Start()
  {
    lastTimeTriggerStayCalled = -frequency;
  }

  private void OnTriggerStay2D(Collider2D otherCollider)
  {
    HealthSystemAttribute healthScript = otherCollider.gameObject.GetComponent<HealthSystemAttribute>();
    if (Time.time >= lastTimeTriggerStayCalled + frequency && healthScript == true) //check also the frequency
    {
      //check for the tag of the object which entered the area, if necessary
      if (otherCollider.CompareTag("Player"))
      {
        // increment time
        lastTimeTriggerStayCalled = Time.time;
        // subtract health from the player
        healthScript.ModifyHealth(healthChange);
      }
    }
  }
}