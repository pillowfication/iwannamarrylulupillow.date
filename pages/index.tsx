import React, { useState } from 'react'
import bent from 'bent'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

console.log(typeof window !== 'undefined' && window.location)
const post = bent('POST', 'json', 200)

const cows = {
  holsteinFreisian: 'Holstein Friesian',
  shorthorn: 'Shorthorn',
  wilstermarch: 'Wilstermarch',
  vosges: 'Vosges',
  ansbach: 'Ansbach',
  jersey: 'Jersey',
  hereford: 'Hereford',
  allgauer: 'Allgauer',
  guernsey: 'Guernsey',
  simmental: 'Simmental',
  hungarianGray: 'Hungarian Gray',
  angler: 'Angler',
  charolais: 'Charolais',
  brownSwiss: 'Brown Swiss'
}

const useStyles = makeStyles(theme => ({
  questionnaire: {
    marginTop: theme.spacing(25),
    border: '1px solid black',
    borderRadius: '2em',
    padding: theme.spacing(5)
  }
}))

const Index = (): React.ReactElement => {
  const classes = useStyles()
  const router = useRouter()
  const [form, setForm] = useState({
    username: '',
    fishingExperience: '',
    notMiqote: false,
    legend: 0,
    chocobo: '',
    slimeRancher: '',
    gobbie: '',
    cow1: 'moo',
    cow2: 'moo',
    cow3: 'moo',
    comments: '',
    balloons: false
  })

  const onInputUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      username: event.target.value
    })
  }

  const onInputFishingExperience = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setForm({
      ...form,
      fishingExperience: event.target.value
    })
  }

  const onInputNotMiqote = (): void => {
    setForm({
      ...form,
      notMiqote: !form.notMiqote
    })
  }

  const onInputLegend = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      legend: +event.target.value
    })
  }

  const onInputBalloons = (): void => {
    setForm({
      ...form,
      balloons: !form.balloons
    })
  }

  const onInputChocobo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      chocobo: event.target.value
    })
  }

  const onInputSlimeRancher = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      slimeRancher: event.target.value
    })
  }

  const onInputGobbie = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      gobbie: event.target.value
    })
  }

  const onInputComments = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      comments: event.target.value
    })
  }

  const inputCow1 = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setForm({
      ...form,
      cow1: event.target.value as string
    })
  }
  const inputCow2 = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setForm({
      ...form,
      cow2: event.target.value as string
    })
  }
  const inputCow3 = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setForm({
      ...form,
      cow3: event.target.value as string
    })
  }

  const submit = (): void => {
    post(`${window.location.origin}/api/submit`, form)
      .then(() => { router.push('/thanks') })
      .catch(err => { console.log(err) })
  }

  return (
    <>
      <h1>I wanna marry Lulu Pillow</h1>
      <img src='/images/wuwuusdf.png' style={{ maxWidth: '100%' }} />
      <h2 style={{ textAlign: 'center' }}>Do you? Keep scrolling please</h2>
      <Grid container spacing={5} className={classes.questionnaire}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>wuwu qwestionnaire</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Username'
            value={form.username}
            onChange={onInputUsername}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography><b>Do you play a male miqote?</b></Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={form.notMiqote}
                onChange={onInputNotMiqote}
              />
            }
            label='No'
          />
        </Grid>
        <Grid item xs={12}>
          <Typography><b>Please describe your ff14 fishing experience (minimum 3 paragraphs)</b></Typography>
          <TextField
            multiline
            fullWidth
            variant='outlined'
            rows={4}
            value={form.fishingExperience}
            onChange={onInputFishingExperience}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography><b>Are you at least a double legend?</b></Typography>
          <RadioGroup row value={form.legend} onChange={onInputLegend}>
            <FormControlLabel
              control={<Radio />}
              value={0}
              label='I suck'
            />
            <FormControlLabel
              control={<Radio />}
              value={1}
              label='Single'
            />
            <FormControlLabel
              control={<Radio />}
              value={2}
              label='Double'
            />
            <FormControlLabel
              control={<Radio />}
              value={3}
              label='Triple'
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography><b>What is the name of your chocobo?</b></Typography>
          <TextField
            fullWidth
            placeholder='chocobo'
            value={form.chocobo}
            onChange={onInputChocobo}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography><b>What are your thoughts on Slime Rancher, and would you stream it so I can watch you play? (purely hypothetical)</b></Typography>
          <TextField
            fullWidth
            placeholder='i love slime rancher'
            value={form.slimeRancher}
            onChange={onInputSlimeRancher}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography><b>Gobbie...</b></Typography>
          <TextField
            fullWidth
            value={form.gobbie}
            onChange={onInputGobbie}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography><b>What are your top 3 cows?</b></Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Select
                fullWidth
                value={form.cow1}
                onChange={inputCow1}
              >
                <MenuItem value='moo'>moo</MenuItem>
                {Object.entries(cows).map(([key, value]) =>
                  <MenuItem key={key} value={key}>{value}</MenuItem>
                )}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                fullWidth
                value={form.cow2}
                onChange={inputCow2}
              >
                <MenuItem value='moo'>moo</MenuItem>
                {Object.entries(cows).map(([key, value]) =>
                  <MenuItem key={key} value={key}>{value}</MenuItem>
                )}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                fullWidth
                value={form.cow3}
                onChange={inputCow3}
              >
                <MenuItem value='moo'>moo</MenuItem>
                {Object.entries(cows).map(([key, value]) =>
                  <MenuItem key={key} value={key}>{value}</MenuItem>
                )}
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography><b>Is there anything else I should know about you?</b></Typography>
          <TextField
            fullWidth
            placeholder='Please tell me here if you play Tetris'
            value={form.comments}
            onChange={onInputComments}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography><b>You accept the fact that I just want balloons and will probably leave you at the altar (not a question)</b></Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={form.balloons}
                onChange={onInputBalloons}
              />
            }
            label='Yes'
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' fullWidth color='primary' onClick={submit}>Submit</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Index
