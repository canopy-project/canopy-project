Canopy REST API Test Plan
-------------------------------------------------------------------------------

** POST/api/login **

POSITIVE

  - Correct username & password login works.
  - Correct email & password login works.
  - Returned username matches user's username.
  - Returned email matches user's email.
  - Response header includes Set-Cookie:canopy-login-session

NEGATIVE

  - (Incorrect username, correct password) returns 401 w/ incorrect_username_or_password error
  - (Correct username, incorrect password) returns 401 w/ incorrect_username_or_password error
  - (Correct email, incorrect password) returns 401 w/ incorrect_username_or_password error
  - (Incorrect username & incorrect password) returns 401 w/ incorrect_username_or_password error
  - Non-JSON payload returns returns 400 w/ bad_input error
  - Username missing returns 400 w/ bad_input error
  - Password missing returns 400 w/ bad_input error
  - [GJP to update doc] BASIC AUTH w/ valid device credentials returns
  incorrect_username_or_password error

** POST/api/logout **

POSITIVE:

  - When logged in: 200 OK w/ {"result" : "ok}
  - When logged out: 200 OK w/ {"result" : "ok}
  - Subsequent api requests fail using this cookie (for example /api/user/self)



** POST /api/create_user **

POSITIVE:

  - User creation works.

NEGATIVE:

  - Username too short fails with 400 w/ bad_input error
  - Username too long fails with 400 w/ bad_input error
  - Username has invalid characters fails with 400 w/ bad_input error
  - Username starts with number fails with 400 w/ bad_input error
  - Username starts with symbol fails with 400 w/ bad_input error
  - Invalid email fails with 400 w/ bad_input error
  - Password too short fails with 400 w/ bad_input error
  - Password too long fails with 400 w/ bad_input error
  - Email taken results 400 w/ email_taken error
  - Username taken results 400 w/ username_take error



** GET /api/user/self **

POSITIVE:

  - Gets current user when using BASIC AUTH
  - Gets current user when using session-based AUTH
  - Returned username matches user's username
  - Returned email matches user's username

NEGATIVE:

  - Missing AUTH returns 401 w/ not_authenticated error
  - BASIC AUTH w/ incorrect username returns 401 w/ incorrect_username_or_password
  - BASIC AUTH w/ incorrect password returns 401 w/ incorrect_username_or_password
  - [GJP to update doc] Request performed with device credentials returns 401 w/ permission_denied



** POST /api/user/self **

POSITIVE:

  - Updating password works when using BASIC AUTH
  - Updating password works when using session-based AUTH
  - Updating email works when using BASIC AUTH
  - Updating email works when using session-based AUTH
  - Updating email and password works when using BASIC AUTH
  - Updating email and password works when using session-based AUTH

NEGATIVE:

  - Password too short fails with 400 w/ bad_input error
  - Password too long fails with 400 w/ bad_input error
  - Invalid email fails with 400 w/ bad_input error
  - Email taken results 400 w/ email_taken error
  - "old_password" and "new_password" mismatch returns 400 bad_input error
  - "old_password" does not match User's password returns 400 bad_input error
