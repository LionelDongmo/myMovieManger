<ScrollView style={styles.detaille}>
<Text style={styles.title}> {this.film.title.rendered} </Text>
<View style={styles.info_film}>
    {this.infoFilm("Date de sortie :", this.film.postMeta.dateSortie)}
    {this.infoFilm("Durée :", this.film.postMeta.duree)}
    {this.infoFilmNote()}
    {this.infoFilm("Genre :", this.film.taxonomies.genre)}
    {this.infoFilm("pays :", this.film.taxonomies.tag)}
    {this.infoFilm("Réalisateur :", this.film.postMeta.Realisateur)}
    {this.infoFilm("Acteurs :", this.film.postMeta.Acteurs)}
    <View style={styles.info_itemResum}>
        <Text style={styles.label} > Note: </Text>
        <Text style={styles.texte}> {this.film.postMeta.description} </Text>
    </View>
</View>
<View>
    <TouchableOpacity style={styles.link_film}> <Text style={styles.linkText}> Voir | Télécharger </Text> </TouchableOpacity>
</View>
</ScrollView>