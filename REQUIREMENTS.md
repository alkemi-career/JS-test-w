# JavaScript Screening — 5 Minutes

Short check, not a take-home. Budget about 5 minutes.

Nothing to install — no packages, no internet. Just Node, git, and an editor.

## 1. Set up your branch

Clone the repo you were given access to and open the **folder** in VS Code
(`File > Open Folder…`, or `code .` from the folder).

Open the integrated terminal — **Ctrl + `** (Windows/Linux) or **Cmd + `** (macOS) —
and run:

```
node --version
git checkout -b submission/firstname-lastname
```

Node 18+ is required. Use your real name in the branch, lowercase and hyphenated.

**`main` is read-only.** Every change you make belongs on your own branch. Do not
commit to `main`, do not merge into it, and do not open a pull request.

## 2. Write the code

Open `solution.js`. Three functions have a `// TODO` in the body — implement all
three. The comment above each one gives you the expected behaviour.

Edit only the function bodies. Leave everything below the `do not edit` line alone,
and don't change `REQUIREMENTS.md`.

## 3. Check your work

```
node solution.js
```

Correct output looks exactly like this:

```
1: 1,234.50
2: 999.00
3: 1,234,567.89
4: 5317
5: 0
6: [ 'dev', 'ben', 'eli' ]
7: [ 'dev' ]
8: not mutated
```

Re-run as often as you like until your output matches.

## 4. Submit

```
git add solution.js
git commit -m "solution: firstname lastname"
git push -u origin submission/firstname-lastname
```

Then reply to the email with your branch name. That's it.

If your output doesn't fully match in the time you've given it, push anyway —
partial work is fine and we still want to see it.

## Rules

- Standard JavaScript only. Any built-in method is fair game.
- No hardcoding. Returning `"1,234.50"` from a lookup table isn't a solution —
  the functions must work on any input of the same shape.
- Your branch only. Don't read other candidates' branches.
