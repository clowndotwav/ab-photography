# Putting AB Photography online

Two separate things, often confused:

| | What it is | Cost |
|---|---|---|
| **Hosting** | The computer that serves the site to visitors | **$0** — this site is static, so free tiers are genuinely enough forever |
| **Domain** | The name people type — `abphotography.com.au` | **~$10 first year, ~$23/yr after** |

The domain is the only money involved. Do it in this order — get it live on a
free URL first, *then* buy the name and point it at it.

---

## Step 1 — Live in about 60 seconds (free, no account)

1. Go to **netlify.com/drop**
2. Drag the whole `ABPhotographyWebsite` folder onto the page
3. Done. You get a URL like `melodic-brioche-a1b2c3.netlify.app`

Send it to Adam, check it on a phone. Nothing is committed — close the tab and
it goes away.

To keep it (so you can update it and attach a domain), click **"Sign up to keep
this site"** and use a Google login. Still free.

**Updating later:** Netlify dashboard → your site → *Deploys* → drag the folder
on again. Five seconds, replaces everything.

---

## Step 2 — Buy the domain

### Which ending?

| Domain | Needs an ABN? | Roughly |
|---|---|---|
| `abphotography.com.au` | Yes — **Adam has one ✅** | ~$10 first yr, ~$23/yr after |
| `abphotography.au` | Yes — same rules | similar |
| `abphotography.com` | No | ~$17–25/yr |

**Take the `.com.au`.** It reads as a real Australian business and is what a WA
club or event organiser expects to see.

### Check this before paying: the name-connection rule

auDA requires the domain to relate to the registrant. Cleanest way to satisfy it
is for **"AB Photography" to be a registered business name against ABN
22 167 097 329.**

Look the ABN up at **abr.business.gov.au** and check what's under *Business names*:

- **"AB Photography" is listed** → nothing to do, registration sails through.
- **Only "Adam Bridge", sole trader** → it will *probably* still pass, since
  photography is a service he provides. Registering the business name with ASIC
  removes all doubt and lets him invoice as AB Photography:
  **$47 for 1 year, $108 for 3** (3 years is better value).

Have the ABN handy at checkout — registrars validate it live, so a typo bounces
you straight back.

### Where to buy

Any Australian registrar. **VentraIP** and **Crazy Domains** are the usual two;
VentraIP has local phone support, which matters the one time something breaks.
Type the name into their search box — it checks availability *and* walks you
through the ABN eligibility step.

**Watch for:** the cheap first-year price is a teaser — check the *renewal*
price before committing, and decline the upsells (hosting, email, site builder,
"domain privacy", which .au domains don't support anyway).

---

## Step 3 — Point the domain at the site

In Netlify: **Site settings → Domain management → Add a domain** → type the
domain you bought.

Netlify shows you two nameserver addresses. Log into the registrar, find
**Nameservers** (sometimes under "DNS" or "Manage domain"), replace what's there
with Netlify's two.

Save, then wait — usually under an hour, occasionally up to 24. HTTPS turns
itself on automatically once the domain resolves. You don't buy a certificate.

---

## Step 4 — Email

The site now uses **djadambridge@gmail.com**, which works today — no setup needed.

If Adam later wants `hello@abphotography.com.au` instead, that comes with the
domain and needs one of:

- **Free:** email *forwarding* at the registrar — anything sent to the domain
  address lands in his Gmail. Fine for enquiries, but replies still come from
  the Gmail address.
- **Paid:** Google Workspace or Microsoft 365, roughly $10-15/user/month, for a
  real mailbox that sends *from* the domain.

Either way it's a change in two files: `index.html` (x3) and `js/app.js` (x1).

---

## Ongoing

- The domain auto-renews yearly — keep a card on file or it lapses and someone
  else can take it.
- Hosting stays free unless traffic gets serious.
- Updating is always the same: edit the files, drag the folder onto Netlify again.
