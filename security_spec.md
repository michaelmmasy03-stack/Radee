# Security Specification - ScholarPulse

## Data Invariants
1. Announcements and Events can only be created by users with 'teacher' or 'admin' roles.
2. Students can read all announcements and events but cannot modify them.
3. User profiles are private; only the owner can read/write their own profile (except for role management, which is restricted).
4. All timestamps must be server-generated.

## The Dirty Dozen Payloads (Targeting PERMISSION_DENIED)
1. **Student Create Announcement**: A user with `role: 'student'` trying to POST to `/announcements`.
2. **Anonymous Create**: Unauthenticated user trying to POST to `/announcements`.
3. **Malicious ID**: Trying to create a document with a 2KB string as ID.
4. **Role Escalation**: A user trying to update their own role from 'student' to 'admin'.
5. **Shadow Field**: Adding `isPromoted: true` to an announcement payload.
6. **Fake Author**: A teacher (UID: A) setting `authorId: 'B'` in an announcement.
7. **Future/Past Spoofing**: Sending a client-side `createdAt` timestamp instead of `request.time`.
8. **Delete Others' Work**: A teacher trying to delete an announcement created by another teacher.
9. **Blanket Read Request**: Trying to query all user profiles without filtering by UID.
10. **Resource Poisoning**: Sending a 1MB string in the `title` field.
11. **Orphaned Registration**: Creating an event with a non-existent parent structure (not applicable here, but good to keep in mind).
12. **Status Skipping**: If we had a workflow, skip a status. Here, maybe editing an immutable field like `createdAt`.

## Test Runner (Logic Outline)
- Mock auth as student -> Verify `/announcements` write fails.
- Mock auth as teacher -> Verify `/announcements` write succeeds if `authorId` matches.
- Mock auth as teacher -> Verify updating `createdAt` fails.
- Mock auth as anyone -> Verify reading someone else's `/users/{userId}` private info fails.
