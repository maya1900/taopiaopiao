<template>
  <div class="movie">
    <div class="show-info">
      <div class="poster">
        <img :src="getPoster" alt="" />
        <span>{{ movieObj.showMark }}</span>
      </div>
      <div class="show-name">
        <h2>{{ movieObj.showName }}</h2>
        <p>
          {{ movieObj.duration }}分钟 / {{ movieObj.type }} /
          {{ movieObj.country }}
        </p>
        <p>{{ movieObj.openDay }} 在{{ movieObj.country }}上映</p>
      </div>
    </div>
    <div class="show-remark">
      <section>
        <h4><span>淘票票口碑</span><i></i></h4>
        <div class="remark-body">
          <div class="f1">
            <p class="score">{{ movieObj.remark }}</p>
            <div class="star-rank">
              <div class="star-rank-inner"></div>
            </div>
            <!-- 匹配删除字符串间空格 判断如果有数据再加载数据-->
            <p class="remark-num" v-if="movieObj.scoreAndFavor">
              {{ getRemarkNum }}
            </p>
          </div>
          <LineScore
            :scoreDataList="movieObj.scoreDataList"
            v-if="movieObj.scoreDataList"
          />
          <div class="favor-info" v-if="movieObj.scoreAndFavor">
            <p>
              <span>{{
                movieObj.scoreAndFavor.favorCountDesc.split(" ")[0]
              }}</span
              >{{ movieObj.scoreAndFavor.favorCountDesc.split(" ")[1] }}
            </p>
            <p>
              <span>{{ getWatchCount }}万</span>人看过
            </p>
          </div>
        </div>
      </section>
    </div>
    <section class="tab-wrapper">
      <ul>
        <li @click="f1()">简介</li>
        <li style="position: relative" @click="f2()">
          影评<span>{{ parseInt(commentObj.count / 10000) }}w</span>
        </li>
        <li @click="f3()">更多</li>
      </ul>
      <div class="line-botton" :style="{ left: left }"></div>
    </section>
    <section class="show-desc">
      <p @click="unfold()" :class="{ unfol: unfol }">
        {{ movieObj.description }}
      </p>
    </section>
    <section class="show-artistes">
      <Artist
        title="演职人员"
        :num="movieObj.artisteNum"
        :list="movieObj.artistes.actor"
        v-if="movieObj.artistes"
      />
    </section>
    <section class="show-albums">
      <Artist
        title="视频和剧照"
        :num="movieObj.trailerNum"
        :list="movieObj.trailer"
        v-if="movieObj.trailer"
      />
    </section>
    <section class="show-sort">
      <h2>票房</h2>
      <div class="show-sort-con" v-if="movieObj.boxOfficeData">
        <div class="item">
          <h3>{{ movieObj.boxOfficeData.sort }}</h3>
          <label>今日票房排名</label>
        </div>
        <div class="item">
          <h3>
            {{
              parseInt(
                movieObj.boxOfficeData.weeklyBoxOffice / 10000
              ).toLocaleString()
            }}
          </h3>
          <label>首周票房(万)</label>
        </div>
        <div class="item">
          <h3>
            {{
              parseInt(
                movieObj.boxOfficeData.totalBoxOffice / 10000
              ).toLocaleString()
            }}
          </h3>
          <label>累计票房(万)</label>
        </div>
      </div>
      <span class="desc">票房详情</span>
    </section>
    <section class="show-comments">
      <h2>观众热评</h2>
      <ul>
        <li v-for="(v, i) in commentObj.tabs" :key="i">{{ v.name }}</li>
      </ul>
      <div class="show-comments-list">
        <CommentItem
          v-for="(v, i) in commentObj.comments"
          :key="i"
          :commentArr="v"
        />
      </div>
      <span>全部{{ commentObj.count }}条观众影评</span>
    </section>
    <section class="show-deep">
      <div class="deep-title">
        <h2>深度影评</h2>
        <span>{{ commentOtObj.deepArticleCount }}</span>
      </div>
      <div
        class="deep-list"
        v-for="(v, i) in commentOtObj.deepArticleList"
        :key="i"
      >
        <div class="deep-list-item">
          <h4>{{ v.title }}</h4>
          <div class="deep-botton">
            <i></i>
            <span>{{ v.media }}</span>
            <div class="right-part">
              <em class="i1"></em>
              <span>{{ v.favorCount }}</span>
              <em class="i2"></em>
              <span>{{ v.commentCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="show-articles">
      <div class="articles-title">
        <h2>电影快讯</h2>
        <span>{{ commentOtObj.deepArticleCount }}</span>
      </div>
      <div class="articles-con" v-if="commentOtObj.dynamicArticleList">
        <div
          class="articles-item"
          v-for="(v, i) in commentOtObj.dynamicArticleList"
          :key="i"
        >
          <div class="f1">
            <h3>{{ v.title }}</h3>
            <div class="info">
              <em>阅读 {{ v.pv }}</em>
              <span>{{ getSingleTime(v.pubTime) }}</span>
            </div>
          </div>
          <div class="f2">
            <img :src="getMediaImage(v.mediaImage)" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="show-data">
      <div class="con">
        <div class="item" v-for="(v, i) in movieObj.showDataList" :key="i">
          <h4>{{ v.name }}</h4>
          <p>
            <span>{{ v.title }}</span
            ><i></i>
          </p>
        </div>
      </div>
    </section>
    <div class="show-band">
      <i></i>
    </div>
    <div class="movie-bottom">
      <div class="con">
        <div class="f1">
          <p>{{ movieObj.showGuide }}</p>
          <span>{{ movieObj.showSubGuide }}</span>
        </div>
        <div class="f2">立即购票</div>
      </div>
    </div>
    <a href="javascript:;" class="retu" @click="retu()" v-show="btnFlag"
      >返回顶部</a
    >
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LineScore from "com/lineScore";
import Artist from "com/artist";
import CommentItem from "com/commentItem";

export default {
  components: {
    LineScore,
    Artist,
    CommentItem,
  },
  methods: {
    ...mapActions("movieDetail", [
      "getMovieDetail",
      "getMovieComment",
      "getMovieCommentOther",
    ]),
    unfold() {
      this.unfol = !this.unfol;
    },
    getSingleTime(t) {
      let date = new Date(t.replace(/-/g, "/")).getTime();
      date = new Date(date);
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      return M + D + h + m;
    },
    getMediaImage(val) {
      return "https://gw.alicdn.com/" + val;
    },
    retu() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          this.scrollTop + ispeed;
        if (this.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //
      this.scrollTop = scrollTop;
      if (this.scrollTop > 400) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
      // console.log(this.scrollTop);
      if (this.scrollToTop > 2800) {
        this.left = "305px";
      } else if (this.scrollTop > 1000) {
        this.left = "180px";
      } else {
        this.left = "55px";
      }
    },
    f1(){
      document.documentElement.scrollTop =
        document.body.scrollTop = 324
    },
    f2(){
      document.documentElement.scrollTop =
        document.body.scrollTop = 1001
    },
    f3(){
      
      document.documentElement.scrollTop = document.body.scrollTop = 2800
      this.left = "305px"
        
    },
  },
  mounted() {
    this.getMovieDetail(this.$route.query.showid);
    this.getMovieComment(this.$route.query.showid);
    this.getMovieCommentOther(this.$route.query.showid);
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  computed: {
    ...mapState("movieDetail", ["movieObj"]),
    ...mapState("movieDetail", ["commentObj"]),
    ...mapState("movieDetail", ["commentOtObj"]),
    getPoster() {
      return "https://gw.alicdn.com/" + this.movieObj.poster;
    },
    getRemarkNum() {
      return this.movieObj.scoreAndFavor.score.scoreCountDesc.replace(
        /\s*/g,
        ""
      );
    },
    getWatchCount() {
      return ((this.movieObj.scoreAndFavor.watchCount * 1.0) / 10000).toFixed(
        1
      );
    },
  },
  data() {
    return {
      unfol: true,
      btnFlag: false,
      left: "55px",
    };
  },
};
</script>

<style lang="scss" scoped>
.movie {
  margin-bottom: 64px;
}
.show-info {
  background-color: #fff;
  padding: 20px 20px 10px;
  overflow: hidden;
  .poster {
    float: left;
    width: 97px;
    height: 135px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
    span {
      position: absolute;
      top: 3px;
      left: 2px;
      font-size: 10px;
      background-color: #fff;
      border-radius: 3px;
    }
  }
  .show-name {
    float: left;
    margin-left: 8px;
    p {
      font-size: 12px;
      color: #999;
      margin: 6px 0;
    }
  }
}
.show-remark {
  background-color: #fff;
  overflow: hidden;
  section {
    margin: 10px 20px 19px;
    padding: 10px 15px;
    background-color: #fff;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    h4 {
      display: flex;
      justify-content: space-between;
      i {
        width: 8px;
        height: 8px;
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        transform: rotate(45deg);
        position: relative;
        top: 6px;
      }
    }
    .remark-body {
      display: flex;
      margin-top: 5px;
      .f1 {
        min-width: 70px;
        text-align: center;
        .score {
          color: #fe942a;
          font-weight: 500;
          font-size: 28px;
          line-height: 8vw;
        }
        .star-rank {
          height: 12px;
          background-size: 12px 100%;
          margin: auto;
          width: 60px;
          background-image: url(//gw.alicdn.com/tfs/TB1UoBbgeH2gK0jSZJnXXaT1FXa-32-32.svg);
          .star-rank-inner {
            height: 100%;
            background-size: 12px 100%;
            background-image: url(//gw.alicdn.com/tfs/TB1Kto9f1L2gK0jSZPhXXahvXXa-32-32.svg);
            width: 90%;
          }
        }
        .remark-num {
          font-size: 12px;
          color: #999;
          margin-top: 3px;
        }
      }
      .favor-info {
        max-width: 130px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #999;
        span {
          color: #000;
          font-weight: 600;
        }
      }
    }
  }
}
.tab-wrapper {
  background-color: #fff;
  margin-top: 10px;
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 48px;
  ul {
    display: flex;
    list-style: none;
    li {
      flex: 1;
      text-align: center;
      padding: 15px 0;
      span {
        position: absolute;
        display: block;
        width: 9.33333333vw;
        top: 10px;
        right: 8px;
        font-size: 0.625rem;
        color: #999;
        -webkit-text-fill-color: #999;
        font-weight: 400;
        text-align: left;
      }
    }
  }
  .line-botton {
    width: 15px;
    height: 2px;
    background-color: #000;
    position: relative;
    left: 55px;
    translate: all 0.5s;
  }
}
.show-desc {
  background-color: #fff;
  padding-top: 15px;
  overflow: hidden;
  p {
    margin: 0 16px 15px;
    display: -webkit-box;
    // -webkit-line-clamp: 3;
    // -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    line-height: 25px;
  }
  .unfol {
    height: 75px;
    overflow: hidden;
    position: relative;
    &::after {
      content: "展开";
      position: absolute;
      bottom: 0;
      right: 0;
      display: inline-block;
      color: #00afff;
      background: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0),
        #fff,
        #fff,
        #fff
      );
      width: 14.1vw;
      text-align: right;
      line-height: 25px;
    }
  }
}
.show-sort {
  background-color: #fff;
  h2 {
    font-size: 17px;
    line-height: 10vw;
    padding-top: 2.5vw;
    padding-bottom: 2.5vw;
    color: #000;
    padding-left: 16px;
    font-weight: 500;
  }
  .show-sort-con {
    display: flex;
    .item {
      flex: 1;
      margin-bottom: 5vw;
      h3 {
        text-align: center;
        font-size: 30px;
        color: #000;
        line-height: 48px;
        font-weight: 400;
      }
      label {
        text-align: center;
        display: block;
        font-size: 12px;
        color: #999;
      }
    }
  }
  .desc {
    font-size: 15px;
    color: #00afff !important;
    text-align: center;
    display: block;
    padding-bottom: 4.3vw;
  }
}
.show-comments {
  background-color: #fff;
  position: relative;
  h2 {
    font-size: 17px;
    line-height: 10vw;
    padding-top: 3.7vw;
    padding-bottom: 2.5vw;
    color: #000;
    padding-left: 16px;
    font-weight: 500;
  }
  ul {
    padding: 0 4vw;
    overflow: hidden;
    li {
      float: left;
      margin-right: 2.1vw;
      margin-bottom: 2.7vw;
      padding: 1.86666667vw 4vw;
      text-align: left;
      line-height: 3.7vw;
      font-size: 0.8125rem;
      color: #000;
      position: relative;
      list-style: none;
      border: 1px solid #bcbcbc;
      border-radius: 100px;
    }
  }
  .show-comments-list {
    margin-left: 16px;
  }
  span {
    font-size: 15px;
    line-height: 1.5;
    color: #00afff !important;
    text-align: center;
    display: block;
    padding-bottom: 4.3vw;
    padding-top: 4.3vw;
    position: relative;
  }
}
.show-deep {
  background-color: #fff;
  padding-bottom: 20px;
  .deep-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 17px;
      line-height: 10vw;
      padding-top: 2.5vw;
      padding-bottom: 2.5vw;
      color: #000;
      padding-left: 16px;
      font-weight: 500;
    }
    span {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      padding-right: 16px;
      font-size: 12px;
      &::after {
        content: " ";
        width: 3.2vw;
        height: 3.2vw;
        background-size: contain;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M587.763 512l-243.37-224.648c-17.314-15.983-18.394-42.977-2.411-60.292 15.983-17.315 42.976-18.395 60.291-2.412l277.334 256c18.302 16.895 18.302 45.81 0 62.704l-277.334 256c-17.315 15.983-44.308 14.903-60.291-2.412-15.983-17.315-14.903-44.309 2.412-60.292L587.763 512z'/%3E%3C/svg%3E");
        position: relative;
        top: 1px;
      }
    }
  }
  .deep-list-item {
    margin-left: 5.3vw;
    margin-right: 5.3vw;
    &:nth-child(-n + 1) {
      margin-top: 30px;
    }
    h4 {
      color: #000;
      font-weight: 700;
      font-size: 1rem;
      padding-bottom: 10px;
    }
    .deep-botton {
      margin-top: 2.1vw;
      height: 5.3vw;
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        background: #fff no-repeat 50%;
        background-image: url(//gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png);
        background-size: cover;
        border-radius: 50%;
        height: 5.3vw;
        width: 5.3vw;
        flex: none;
      }
      span {
        margin-left: 2.1vw;
        font-size: 0.75rem;
        color: #666;
        flex: auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .right-part {
        flex: none;
        font-size: 0.75rem;
        color: #bdc1c9;
        display: flex;
        align-items: center;
        em {
          display: inline-block;
          position: relative;
          background-position: 50%;
          background-size: contain;
          background-repeat: no-repeat;
          width: 4.26666667vw;
          height: 4.26666667vw;
        }
        .i1 {
          background-image: url(//gw.alicdn.com/tfs/TB1SeqMr1bviK0jSZFNXXaApXXa-35-36.svg);
        }
        .i2 {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPage 1%3C/title%3E%3Cg fill='%23bcbcbc' fill-rule='evenodd'%3E%3Cpath d='M14.13 25.47c-1.35.016-2.673-.203-3.933-.647-.452-.16-.917-.24-1.393-.24-.222 0-.444.017-.663.052l-2.842.32c-.042.007-.083.01-.12.01-.238 0-.37-.06-.502-.265-.063-.097-.04-.39.11-.705l.336-.705c.455-.955-.008-1.957-.605-2.832-1.288-1.885-1.975-4.097-1.99-6.388C2.494 7.76 7.594 2.587 13.895 2.532h.104c6.304 0 11.45 5.128 11.467 11.433.02 6.167-5.173 11.434-11.335 11.504zM26.885 8.52c-.707-1.664-1.716-3.153-3.002-4.435-1.285-1.282-2.778-2.287-4.445-2.99C17.714.37 15.884 0 13.998 0h-.125c-3.738.034-7.24 1.512-9.855 4.166C1.406 6.82-.022 10.344 0 14.083c.015 2.802.858 5.497 2.43 7.804.35.51.4 1.172.137 1.724l-.367.768c-.34.71-.29 1.53.13 2.193.418.666 1.137 1.067 1.915 1.067.125 0 .25-.01.375-.03l3.25-.53c.16-.026.318-.037.477-.037.344 0 .684.057 1.013.174 1.49.52 3.05.786 4.638.786h.163c1.857-.023 3.667-.412 5.376-1.164 1.644-.723 3.126-1.747 4.404-3.04 1.274-1.293 2.276-2.79 2.975-4.446.726-1.72 1.092-3.535 1.085-5.392-.008-1.886-.382-3.716-1.115-5.436z'/%3E%3Crect x='13' y='11' width='2.4' height='5' rx='1.2'/%3E%3Crect x='19' y='11' width='2.4' height='5' rx='1.2'/%3E%3C/g%3E%3C/svg%3E");
        }
      }
    }
  }
}
.show-articles {
  background-color: #fff;
  .articles-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 17px;
      line-height: 10vw;
      padding-top: 2.5vw;
      padding-bottom: 2.5vw;
      color: #000;
      padding-left: 16px;
      font-weight: 500;
    }
    span {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      padding-right: 16px;
      font-size: 12px;
      &::after {
        content: " ";
        width: 3.2vw;
        height: 3.2vw;
        background-size: contain;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M587.763 512l-243.37-224.648c-17.314-15.983-18.394-42.977-2.411-60.292 15.983-17.315 42.976-18.395 60.291-2.412l277.334 256c18.302 16.895 18.302 45.81 0 62.704l-277.334 256c-17.315 15.983-44.308 14.903-60.291-2.412-15.983-17.315-14.903-44.309 2.412-60.292L587.763 512z'/%3E%3C/svg%3E");
        position: relative;
        top: 1px;
      }
    }
  }
  .articles-con {
    overflow: hidden;
  }
  .articles-item {
    display: block;
    background: #fff;
    margin-left: 5.3vw;
    margin-right: 5.3vw;
    margin-bottom: 2.1vw;
    padding-bottom: 2.1vw;
    height: 34.7vw;
    overflow: hidden;
    position: relative;
    display: flex;
    .f1 {
      height: 34.7vw;
      width: 49.9vw;
      position: relative;
      h3 {
        padding-top: 4vw;
        color: #333;
        font-size: 1rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: 1.4;
      }
      .info {
        position: absolute;
        bottom: 4vw;
        color: #bcbcbc;
        font-size: 0.6875rem;
        display: flex;
        em {
          flex: none;
          margin-right: 5.3vw;
          font-style: normal;
        }
      }
    }
    .f2 {
      position: absolute;
      right: 0;
      top: 8px;
      z-index: 10;
      border-radius: 2px;
      width: 36vw;
      height: 29.3vw;
      background-size: 36px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.show-data {
  background-color: #fff;
  .con {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      width: 50%;
      h4 {
        margin-left: 16px;
        margin-right: 20px;
        color: #333;
        font-weight: 500;
      }
      p {
        display: flex;
        align-items: center;
        margin-left: 16px;
        margin-right: 20px;
        padding-top: 1.1vw;
        padding-bottom: 5.3vw;
        span {
          font-size: 0.75rem;
          color: #999;
          line-height: 1;
          width: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        i {
          flex: 1 0 auto;
          display: block;
          width: 10px;
          height: 10px;
          background-image: url(//gw.alicdn.com/tfs/TB19dtihkY2gK0jSZFgXXc5OFXa-200-200.svg);
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
.show-band {
  text-align: center;
  padding-top: 3.2vw;
  background-color: #f5f5f5;
  i {
    width: 14.1vw;
    height: 4vw;
    display: inline-block;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-image: url("//gw.alicdn.com/tfs/TB1uGgzl7PoK1RjSZKbXXX1IXXa-106-30.svg");
  }
  &::after {
    display: block;
    content: "";
    background-color: #f5f5f5;
    height: 3.2vw;
    padding-bottom: 2.1vw;
  }
}
.movie-bottom {
  position: fixed !important;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  text-align: center;
  .con {
    display: flex;
    align-items: center;
    padding: 2.4vw 3.2vw;
    .f1 {
      flex: 1;
      text-align: left;
      p {
        font-size: 14px;
        font-weight: 500;
        color: #333;
      }
      span {
        font-size: 11px;
        color: #999;
      }
    }
    .f2 {
      background: linear-gradient(90deg, #ff5456, #ff3d5c);
      color: #fff;
      border-radius: 11.2vw;
      width: 108px;
      min-height: 42px;
      line-height: 42px;
      font-weight: bold;
    }
  }
}
.retu {
  position: fixed;
  bottom: 18.8vw;
  padding: 2.1vw;
  right: 4vw;
  width: 10.7vw;
  height: 10.7vw;
  background-image: url(//gw.alicdn.com/tfs/TB1Edquff1TBuNjy0FjXXajyXXa-100-100.png);
  background-size: contain;
  background-position: 50%;
  text-indent: -999rem;
  z-index: 998;
  border-radius: 100px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
}
</style>
