import ContentContainer from "../ContentContainer";
import Spinner from "../Spinner";
import Button from "../Button";
import { useSelectTopScorer, useTopScorers } from "../../api/queryHooks";
import { mockedTopScorers } from "@/const";
import { getFlag } from "@/utils.jsx";

function getName(item) {
  if (!item) return "";
  if (typeof item === "string") return item;
  return (
    item.name ||
    item.fullName ||
    item.playerName ||
    [item.firstName, item.lastName].filter(Boolean).join(" ") ||
    item.id ||
    ""
  );
}

function getCoefficient(item) {
  if (!item) return "";
  return (
    item.coefficient ??
    item.coeficient ??
    item.odds ??
    item.coef ??
    item.price ??
    ""
  );
}

function getGoals(item) {
  if (!item) return "";
  return item.goals ?? item.goalsScored ?? item.scored ?? "";
}

function getCountry(item) {
  if (!item) return "";
  return item.country ?? item.team ?? item.nationality ?? "";
}

export default function TopScorerView() {
  const { isLoading, isFetching } = useTopScorers();
  const { selectTopScorer, isLoadingSelect } = useSelectTopScorer();

  const topScorers = mockedTopScorers;

  const rows = Array.isArray(topScorers)
    ? topScorers
    : topScorers?.items || topScorers?.data || [];

  return (
    <div
      className="bg-black grow uppercase sm:text-dec-base text-dec-2xs"
      style={{
        backgroundImage: "url(/colors-top.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <ContentContainer
        className="py-4 grow justify-center select-none h-full"
        maxWidthClassName="max-w-4xl px-4"
      >
        <div className="sm:mt-24">
          <div className="text-center font-extrabold bg-transparent text-white text-dec-h3 pb-4 md:text-dec-t2 tracking-widest">
            <h1>Top-scorer</h1>
          </div>

          {(isLoading || isFetching) && (
            <div className="flex justify-center pt-10 items-center">
              <Spinner className="h-16 w-16" />
            </div>
          )}

          {!isLoading && (
            <table className="bg-dec-primary w-full text-dec-background font-extrabold">
              <thead>
                <tr className="border-b-4 border-dec-primary-light h-8">
                  <th className="text-left font-extrabold pl-2">Name</th>
                  <th className="text-right font-extrabold pr-2">Goals</th>
                  <th className="text-right font-extrabold pr-2">
                    Coefficient
                  </th>
                  <th className="text-right font-extrabold pr-2">Action</th>
                </tr>
              </thead>
              <tbody className="sm:text-dec-base text-dec-2xs">
                {rows?.map((item) => {
                  const key = item?.id ?? getName(item);
                  return (
                    <tr
                      className="border-b-4 border-dec-primary-light"
                      key={key}
                    >
                      <td className="py-2 pl-2">
                        <div className="flex items-center gap-2">
                          <span>{getFlag(getCountry(item))}</span>
                          <span>{getName(item)}</span>
                        </div>
                      </td>
                      <td className="py-2 pr-2 text-right tabular-nums">
                        {getGoals(item)}
                      </td>
                      <td className="py-2 pr-2 text-right">
                        {getCoefficient(item)}
                      </td>
                      <td className="py-2 pr-2 text-right">
                        <Button
                          className="px-3 py-1 rounded-tr-[10px] rounded-bl-[10px]"
                          loading={isLoadingSelect}
                          onClick={() =>
                            selectTopScorer({
                              id: item?.id,
                              name: getName(item),
                            })
                          }
                        >
                          Select
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </ContentContainer>
    </div>
  );
}
