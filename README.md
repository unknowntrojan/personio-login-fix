# Personio Login Fix

This userscript fixes an issue with the popular HR software [Personio](https://www.personio.com/).

Scenario:

- You log in to your personio instance.
- You leave the tab open for a longer period of time, a day or a weekend.
- Once you re-open the tab, it asks you to log in.
- You press the button, and get redirected to a 401 Authorization Required page.
- You need to remove the part of the url after the TLD in order to continue.

This script detects this scenario and automatically redirects you to the login page again.
