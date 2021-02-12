import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export default async function MusicAudio() {
    const [PlayMusic, setPlayMusic] = useState();
    const { sound } = await Audio.Sound.createAsync(
        require("./src/music/RoadToDate.mp3")
      );

useEffect(() => {
    async function testName() {
      if (PlayMusic) {
        setPlayMusic(PlayMusic);

        await sound.playAsync();
      } else {
        await sound.stopAsync();
      }
    }

    testName();

  }, [PlayMusic])
}