
# UI MODULAR

bikin testing front end secara end to end  jadi lebih gampang dikit 




## Deployment

Untuk menjalakan kode ini secara lokal

```bash
  npm run basic_code 
```

`basic_code` ini nama filenya



## Penjelasan 

di variable `columns`  isikan object array, dengan key kolom yang udah di tentuin


`parent`: jika "proses" nya  berjalan langsung tanpa menunggu "proses" sebelumnya selesai,  maka tidak perlu mendefinisikan parent, tapi jika "proses" tersebut akan berjalan setelah "proses" sebelumnya usai maka definisikanlah  parent sesuai dengan nama parent yang di tuju

`name`  : lebih enak kalau kita ngasih nama dan namanya ini jangan duplikat karna nantinya bisa jadi nama ini di jadikan parent oleh proses lainya yang berjalan 

`type`  : sejauh ini tipenya itu selalu ber value `find`

`method` : untuk method ini bisa di isikan dengan  : 

    click, sendKeys & mouseDown

`by` :  by ini untuk proses pencarian element tersebut berdasarkan apa , contoh `ID` atau `XPATH`

`value` : value dari pencarian `ID` / `XPATH`  nya apa ?

`sleep`  : sebelum proses nya di jalankan harus nunggu berapa lama ? disini kita kasih 3 pilihan array 

    superSlow: 5000
    slow: 2000,
    medium: 1500
    fast: 1000
  
karna biasanya adalam front end itu ada ui sliding , fade in faed out yang butuh waktu beberapa ms sebelmnya flownya di lanjutkan jadi sangat di sarankan  slalu mendefinisikan berapa lama waktu sleep


## Maunya 

mau kedepanya ada ui buat proses input data kolom ini karna ribet kalau nginput sendiri,
nantinya kolom yang di simpen ke db tinggal looping pas mau ngelakuin testing , blom begitu kebayang si masalah stack nya apan, blom lagi ngejalaninya kan pake cli ,
